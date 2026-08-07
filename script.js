// ===== ユーティリティ =====
function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

function formatDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${y}.${m}.${d}`;
}

function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

// hexカラーを明るく/暗くする(amount: -1〜1、負で暗く)
function shade(hex, amount) {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  const adjust = (v) =>
    amount < 0 ? Math.round(v * (1 + amount)) : Math.round(v + (255 - v) * amount);
  const toHex = (v) => Math.max(0, Math.min(255, v)).toString(16).padStart(2, "0");
  return `#${toHex(adjust(r))}${toHex(adjust(g))}${toHex(adjust(b))}`;
}

const CURRENT_YEAR = new Date().getFullYear();
const YEAR_OPTIONS = Array.from({ length: 8 }, (_, i) => CURRENT_YEAR - i); // 直近8年分
const MONTH_OPTIONS = Array.from({ length: 12 }, (_, i) => i + 1);

// ===== 状態 =====
const state = {
  lineIndex: 0,
  visitedDates: {}, // { "路線index-駅index": "YYYY-MM-DD" }
  pendingIdx: null,
  inputDate: todayStr(),
  justPunched: null,
  justCompleted: false,
};

function key(idx) {
  return `${state.lineIndex}-${idx}`;
}

function currentLine() {
  return LINES[state.lineIndex];
}

// ===== DOM参照 =====
const el = {
  tabs: document.getElementById("tabs"),
  lineNote: document.getElementById("lineNote"),
  ledgerNo: document.getElementById("ledgerNo"),
  ledgerName: document.getElementById("ledgerName"),
  ledgerSub: document.getElementById("ledgerSub"),
  doneCount: document.getElementById("doneCount"),
  totalCount: document.getElementById("totalCount"),
  progressFill: document.getElementById("progressFill"),
  originLabel: document.getElementById("originLabel"),
  terminalLabel: document.getElementById("terminalLabel"),
  percentLabel: document.getElementById("percentLabel"),
  track: document.getElementById("track"),
  overlay: document.getElementById("overlay"),
  popoverStationName: document.getElementById("popoverStationName"),
  selectYear: document.getElementById("selectYear"),
  selectMonth: document.getElementById("selectMonth"),
  selectDay: document.getElementById("selectDay"),
  btnDelete: document.getElementById("btnDelete"),
  btnConfirm: document.getElementById("btnConfirm"),
  ticket: document.getElementById("ticket"),
  ticketBody: document.getElementById("ticketBody"),
  btnReset: document.getElementById("btnReset"),
};

// ===== 路線カラーをCSS変数に反映 =====
function applyLineColors(line) {
  const root = document.documentElement;
  root.style.setProperty("--accent", line.color);
  root.style.setProperty("--panel", shade(line.color, -0.62));
  root.style.setProperty("--muted", shade(line.color, 0.35));
  root.style.setProperty("--input-bg", shade(line.color, -0.85));
}

// ===== タブ描画 =====
function renderTabs() {
  el.tabs.innerHTML = "";
  LINES.forEach((l, i) => {
    const btn = document.createElement("button");
    btn.className = "tab" + (i === state.lineIndex ? " active" : "");
    btn.textContent = l.name;
    btn.style.setProperty("--tab-color", l.color);
    btn.addEventListener("click", () => {
      state.lineIndex = i;
      state.pendingIdx = null;
      render();
    });
    el.tabs.appendChild(btn);
  });
}

// ===== 台帳ヘッダー描画 =====
function renderLedger(line, total, doneCount, percent, isComplete) {
  el.ledgerNo.textContent = `NO. ${String(state.lineIndex + 1).padStart(4, "0")}`;
  el.ledgerName.textContent = line.name;
  el.ledgerSub.textContent = `${line.nameEn} ・ 営業キロ ${line.totalKm}km`;
  el.doneCount.textContent = doneCount;
  el.totalCount.textContent = ` / ${total}`;
  el.progressFill.style.width = `${percent}%`;
  el.progressFill.classList.toggle("complete", isComplete);
  el.originLabel.textContent = `起点 ${line.stations[0].name}`;
  el.terminalLabel.textContent = `終点 ${line.stations[total - 1].name}`;
  el.percentLabel.textContent = `${percent}%`;

  if (line.note) {
    el.lineNote.style.display = "block";
    el.lineNote.textContent = `※ ${line.note}`;
  } else {
    el.lineNote.style.display = "none";
  }
}

// ===== 駅トラック描画 =====
function renderTrack(line) {
  el.track.innerHTML = '<div class="track-line"></div>';
  line.stations.forEach((st, idx) => {
    const dateVal = state.visitedDates[key(idx)];
    const done = !!dateVal;
    const punching = state.justPunched === idx;

    const wrap = document.createElement("button");
    wrap.className = "station";
    wrap.addEventListener("click", () => openEntry(idx));

    const circle = document.createElement("div");
    circle.className =
      "station-circle" +
      (done ? " done" : st.abandoned ? " abandoned" : st.planned ? " planned" : "") +
      (punching ? " punching" : "");
    if (done) {
      const punch = document.createElement("span");
      punch.className = "station-punch";
      circle.appendChild(punch);
    } else {
      circle.textContent = idx + 1;
    }

    const nameEl = document.createElement("div");
    nameEl.className =
      "station-name" +
      (done ? " done" : st.abandoned ? " abandoned" : st.planned ? " planned" : "");
    nameEl.textContent = st.name;
    if (st.abandoned) {
      const badge = document.createElement("span");
      badge.className = "badge badge-abandoned";
      badge.textContent = "廃";
      nameEl.appendChild(badge);
    }
    if (st.planned) {
      const badge = document.createElement("span");
      badge.className = "badge badge-planned";
      badge.textContent = "予";
      nameEl.appendChild(badge);
    }

    wrap.appendChild(circle);
    wrap.appendChild(nameEl);

    if (done) {
      const dateEl = document.createElement("div");
      dateEl.className = "station-date";
      dateEl.textContent = formatDate(dateVal);
      wrap.appendChild(dateEl);
    }

    el.track.appendChild(wrap);
  });
}

// ===== 硬券カード描画 =====
function renderTicket(line, total, doneCount, isComplete) {
  el.ticket.classList.toggle("complete", isComplete);
  el.ticket.classList.toggle("just-completed", state.justCompleted);
  el.ticketBody.innerHTML = "";

  if (!isComplete) {
    const wrap = document.createElement("div");
    wrap.className = "ticket-empty";
    const title = document.createElement("div");
    title.className = "ticket-empty-title";
    title.textContent = `残り ${total - doneCount} 駅で発行`;
    const sub = document.createElement("div");
    sub.className = "ticket-empty-sub";
    sub.textContent = "全駅乗車で記念乗車証が発行されます";
    wrap.appendChild(title);
    wrap.appendChild(sub);
    el.ticketBody.appendChild(wrap);
    return;
  }

  const dates = line.stations
    .map((_, idx) => state.visitedDates[key(idx)])
    .filter(Boolean)
    .sort();
  const issuedDate = dates.length ? formatDate(dates[dates.length - 1]) : "";

  const body = document.createElement("div");
  body.className = "ticket-complete-body";

  const left = document.createElement("div");
  left.innerHTML = `
    <div class="ticket-label">記 念 乗 車 証</div>
    <div class="ticket-title">${line.name} 完乗</div>
    <div class="ticket-route">${line.stations[0].name} ─── ${
    line.stations[line.stations.length - 1].name
  }</div>
    <div class="ticket-meta">営業キロ ${line.totalKm}km ・ 全${total}駅</div>
    <div class="ticket-meta last">最終乗車日 ${issuedDate}</div>
  `;

  const stamp = document.createElement("div");
  stamp.className = "stamp";
  stamp.innerHTML = `<div class="stamp-circle">完乗<br />済</div>`;

  body.appendChild(left);
  body.appendChild(stamp);
  el.ticketBody.appendChild(body);
}

// ===== 乗車日入力ポップオーバー =====
function openEntry(idx) {
  state.pendingIdx = idx;
  state.inputDate = state.visitedDates[key(idx)] || todayStr();
  renderPopover();
}

function closeEntry() {
  state.pendingIdx = null;
  renderPopover();
}

function renderPopover() {
  const line = currentLine();
  if (state.pendingIdx === null) {
    el.overlay.classList.add("hidden");
    return;
  }
  el.overlay.classList.remove("hidden");

  const st = line.stations[state.pendingIdx];
  el.popoverStationName.textContent = st.name;

  const [y, m, d] = state.inputDate.split("-").map(Number);

  el.selectYear.innerHTML = YEAR_OPTIONS.map(
    (yy) => `<option value="${yy}" ${yy === y ? "selected" : ""}>${yy}年</option>`
  ).join("");
  el.selectMonth.innerHTML = MONTH_OPTIONS.map(
    (mm) => `<option value="${mm}" ${mm === m ? "selected" : ""}>${mm}月</option>`
  ).join("");
  const dayCount = daysInMonth(y, m);
  const dayOptions = Array.from({ length: dayCount }, (_, i) => i + 1);
  el.selectDay.innerHTML = dayOptions
    .map((dd) => `<option value="${dd}" ${dd === d ? "selected" : ""}>${dd}日</option>`)
    .join("");

  const hasExisting = !!state.visitedDates[key(state.pendingIdx)];
  el.btnDelete.classList.toggle("hidden", !hasExisting);
}

function updateInputDateFromSelects() {
  const y = Number(el.selectYear.value);
  const m = Number(el.selectMonth.value);
  let d = Number(el.selectDay.value);
  const maxDay = daysInMonth(y, m);
  if (d > maxDay) d = maxDay;
  state.inputDate = `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

el.selectYear.addEventListener("change", () => {
  updateInputDateFromSelects();
  renderPopover();
});
el.selectMonth.addEventListener("change", () => {
  updateInputDateFromSelects();
  renderPopover();
});
el.selectDay.addEventListener("change", () => {
  updateInputDateFromSelects();
});

el.overlay.addEventListener("click", (e) => {
  if (e.target === el.overlay) closeEntry();
});

el.btnConfirm.addEventListener("click", () => {
  if (state.pendingIdx === null) return;
  updateInputDateFromSelects();
  state.visitedDates[key(state.pendingIdx)] = state.inputDate;

  const line = currentLine();
  const total = line.stations.length;
  const newDoneCount = line.stations.filter((_, idx) => !!state.visitedDates[key(idx)])
    .length;
  if (newDoneCount === total) {
    state.justCompleted = true;
    setTimeout(() => {
      state.justCompleted = false;
      render();
    }, 1600);
  }

  state.justPunched = state.pendingIdx;
  setTimeout(() => {
    state.justPunched = null;
    render();
  }, 420);

  state.pendingIdx = null;
  render();
});

el.btnDelete.addEventListener("click", () => {
  if (state.pendingIdx === null) return;
  delete state.visitedDates[key(state.pendingIdx)];
  state.pendingIdx = null;
  render();
});

// ===== リセット =====
el.btnReset.addEventListener("click", () => {
  const line = currentLine();
  line.stations.forEach((_, idx) => delete state.visitedDates[key(idx)]);
  state.justCompleted = false;
  state.justPunched = null;
  state.pendingIdx = null;
  render();
});

// ===== 全体描画 =====
function render() {
  const line = currentLine();
  applyLineColors(line);

  const total = line.stations.length;
  const doneCount = line.stations.filter((_, idx) => !!state.visitedDates[key(idx)])
    .length;
  const isComplete = doneCount === total;
  const percent = Math.round((doneCount / total) * 100);

  renderTabs();
  renderLedger(line, total, doneCount, percent, isComplete);
  renderTrack(line);
  renderTicket(line, total, doneCount, isComplete);
  renderPopover();
}

render();
