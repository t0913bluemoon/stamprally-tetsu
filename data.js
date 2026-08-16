// 路線データ(複数路線対応)
// color: 路線ごとのラインカラー
// abandoned: trueの駅は廃止駅(通常の駅と同じ扱いで乗車済みにできる)
// planned: trueの駅は廃止検討中(未確定)の駅
const LINES = [
  {
    name: "富良野線",
    nameEn: "FURANO LINE",
    totalKm: 54.8,
    color: "#8a5fb0", // ラベンダー畑にちなんだ紫
    stations: [
      { name: "旭川", km: 0.0 },
      { name: "西御料", km: 3.9 },
      { name: "西瑞穂", km: 6.4 },
      { name: "西聖和", km: 9.6 },
      { name: "千代ケ岡", km: 12.8 },
      { name: "北美瑛", km: 17.7 },
      { name: "美瑛", km: 22.6 },
      { name: "美馬牛", km: 28.8 },
      { name: "上富良野", km: 35.5 },
      { name: "中富良野", km: 40.6 },
      { name: "ラベンダー畑", km: 43.0 },
      { name: "富良野", km: 54.8 },
    ],
  },
  {
    name: "日高本線",
    nameEn: "HIDAKA LINE",
    totalKm: 146.5, // 全通時の営業キロ。現存区間は苫小牧-鵡川30.5km
    color: "#3d7ea6", // 太平洋沿いの海の青
    stations: [
      { name: "苫小牧", km: 0.0 },
      { name: "勇払", km: 10.1 },
      { name: "浜厚真", km: 18.1 },
      { name: "鵡川", km: 30.5 },
      // 以下、2021年4月1日廃止区間(鵡川-様似)
      { name: "汐見", km: 34.5, abandoned: true },
      { name: "富川", km: 38.5, abandoned: true },
      { name: "日高門別", km: 46.0, abandoned: true },
      { name: "豊郷", km: 51.4, abandoned: true },
      { name: "清畠", km: 56.3, abandoned: true },
      { name: "厚賀", km: 61.9, abandoned: true },
      { name: "大狩部", km: 66.6, abandoned: true },
      { name: "節婦", km: 71.7, abandoned: true },
      { name: "新冠", km: 76.8, abandoned: true },
      { name: "静内", km: 84.7, abandoned: true },
      { name: "東静内", km: 91.1, abandoned: true },
      { name: "春立", km: 96.6, abandoned: true },
      { name: "日高三石", km: 101.8, abandoned: true },
      { name: "本桐", km: 108.9, abandoned: true },
      { name: "荻伏", km: 116.2, abandoned: true },
      { name: "浦河", km: 121.9, abandoned: true },
      { name: "東町", km: 124.4, abandoned: true },
      { name: "日高幌別", km: 129.6, abandoned: true },
      { name: "西様似", km: 143.1, abandoned: true },
      { name: "様似", km: 146.5, abandoned: true },
    ],
  },
  {
    name: "宗谷本線",
    nameEn: "SOYA LINE",
    totalKm: 259.4,
    color: "#5cb3c9", // 日本最北・氷雪をイメージした水色
    stations: [
      { name: "旭川", km: 0.0 },
      { name: "旭川四条", km: null },
      { name: "新旭川", km: null },
      { name: "永山", km: null },
      { name: "北永山", km: null },
      { name: "比布", km: null },
      { name: "南比布", km: null, abandoned: true }, // 2021年廃止
      { name: "北比布", km: null, abandoned: true }, // 2021年廃止
      { name: "蘭留", km: null },
      { name: "塩狩", km: null },
      { name: "和寒", km: null },
      { name: "東六線", km: null, abandoned: true }, // 2021年廃止
      { name: "剣淵", km: null },
      { name: "北剣淵", km: null, abandoned: true }, // 2021年廃止
      { name: "士別", km: null },
      { name: "下士別", km: null, abandoned: true }, // 2021年廃止
      { name: "多寄", km: null },
      { name: "瑞穂", km: null },
      { name: "北星", km: null, abandoned: true }, // 2021年廃止
      { name: "風連", km: null },
      { name: "名寄高校", km: null }, // 旧・東風連。2022年移設改称
      { name: "名寄", km: 76.2 },
      { name: "日進", km: null },
      { name: "智恵文", km: null },
      { name: "智北", km: null },
      { name: "南美深", km: null, abandoned: true }, // 2021年廃止
      { name: "美深", km: null },
      { name: "紋穂内", km: null, abandoned: true }, // 2021年廃止
      { name: "天塩川温泉", km: null },
      { name: "咲来", km: null },
      { name: "音威子府", km: 141.9 },
      { name: "筬島", km: null },
      { name: "佐久", km: null },
      { name: "天塩中川", km: null },
      { name: "歌内", km: null, abandoned: true }, // 2022年廃止
      { name: "問寒別", km: null },
      { name: "糠南", km: null },
      { name: "雄信内", km: null, abandoned: true }, // 2025年廃止
      { name: "安牛", km: null, abandoned: true }, // 2021年廃止
      { name: "上幌延", km: null, abandoned: true }, // 2021年廃止
      { name: "幌延", km: null },
      { name: "南幌延", km: null, abandoned: true }, // 2025年廃止
      { name: "徳満", km: null, abandoned: true }, // 2021年廃止
      { name: "下沼", km: null },
      { name: "豊富", km: null },
      { name: "兜沼", km: null },
      { name: "勇知", km: null },
      { name: "抜海", km: null, abandoned: true }, // 2025年廃止
      { name: "南稚内", km: null },
      { name: "稚内", km: 259.4 },
    ],
  },
  {
    name: "函館本線(海線)",
    nameEn: "HAKODATE LINE (SEA ROUTE)",
    totalKm: 112.3,
    color: "#d68a3c", // 函館山の夜景をイメージした琥珀色
    note:
      "函館〜長万部間(通称「海線」)。廃止駅(仁山・東山・姫川・鷲ノ巣・桂川・本石倉・北豊津・二股・蕨岱)は駅名の存在は確実ですが、並び順は要確認です。赤井川駅は2027年3月ダイヤ改正での廃止をJR北海道が検討中(未確定)です。",
    stations: [
      { name: "函館", km: 0.0 },
      { name: "五稜郭", km: null },
      { name: "桔梗", km: null },
      { name: "大中山", km: null },
      { name: "七飯", km: null },
      { name: "新函館北斗", km: 17.9 },
      { name: "仁山", km: null, abandoned: true }, // 2026年3月廃止
      { name: "大沼", km: null },
      { name: "大沼公園", km: null },
      { name: "赤井川", km: null, planned: true }, // 2027年3月廃止検討中(未確定)
      { name: "駒ヶ岳", km: null },
      { name: "東山", km: null, abandoned: true }, // 2017年廃止
      { name: "姫川", km: null, abandoned: true }, // 2016年に信号場化
      { name: "森", km: null },
      { name: "鷲ノ巣", km: null, abandoned: true }, // 2016年に信号場化
      { name: "桂川", km: null, abandoned: true }, // 2017年廃止
      { name: "本石倉", km: null, abandoned: true }, // 2017年廃止
      { name: "石倉", km: null },
      { name: "落部", km: null },
      { name: "野田生", km: null },
      { name: "山越", km: null },
      { name: "八雲", km: null },
      { name: "山崎", km: null },
      { name: "黒岩", km: null },
      { name: "二股", km: null, abandoned: true }, // 2026年3月廃止
      { name: "北豊津", km: null, abandoned: true }, // 2017年に信号場化
      { name: "国縫", km: null },
      { name: "蕨岱", km: null, abandoned: true }, // 2017年廃止
      { name: "長万部", km: 112.3 },
    ],
  },
  {
    name: "函館本線(山線)",
    nameEn: "HAKODATE LINE (MOUNTAIN ROUTE)",
    totalKm: 140.2,
    color: "#7a8c5c", // ニセコ・羊蹄山麓の山あいをイメージした緑
    note:
      "長万部〜小樽間。2030年度の北海道新幹線札幌延伸に伴い、並行在来線としてバス転換・廃止することが2026年3月に沿線自治体間で確定しています。",
    stations: [
      { name: "長万部", km: 0.0 },
      { name: "黒松内", km: null },
      { name: "熱郛", km: null },
      { name: "目名", km: null },
      { name: "蘭越", km: null },
      { name: "昆布", km: null },
      { name: "ニセコ", km: null },
      { name: "比羅夫", km: null },
      { name: "倶知安", km: null },
      { name: "小沢", km: null },
      { name: "銀山", km: null },
      { name: "然別", km: null },
      { name: "仁木", km: null },
      { name: "余市", km: null },
      { name: "蘭島", km: null },
      { name: "塩谷", km: null },
      { name: "小樽", km: 140.2 },
    ],
  },
  {
    name: "函館本線(小樽~旭川)",
    nameEn: "HAKODATE LINE (OTARU-ASAHIKAWA)",
    totalKm: 170.6,
    color: "#b8433f", // 札幌の街並み・煉瓦色をイメージした赤
    stations: [
      { name: "小樽", km: 0.0 },
      { name: "南小樽", km: null },
      { name: "小樽築港", km: null },
      { name: "朝里", km: null },
      { name: "銭函", km: null },
      { name: "ほしみ", km: null },
      { name: "星置", km: null },
      { name: "稲穂", km: null },
      { name: "手稲", km: null },
      { name: "稲積公園", km: null },
      { name: "発寒", km: null },
      { name: "発寒中央", km: null },
      { name: "琴似", km: null },
      { name: "桑園", km: null },
      { name: "札幌", km: null },
      { name: "苗穂", km: null },
      { name: "白石", km: null },
      { name: "厚別", km: null },
      { name: "森林公園", km: null },
      { name: "大麻", km: null },
      { name: "野幌", km: null },
      { name: "高砂", km: null },
      { name: "江別", km: null },
      { name: "豊幌", km: null },
      { name: "幌向", km: null },
      { name: "上幌向", km: null },
      { name: "岩見沢", km: null },
      { name: "峰延", km: null },
      { name: "光珠内", km: null },
      { name: "美唄", km: null },
      { name: "茶志内", km: null },
      { name: "奈井江", km: null },
      { name: "豊沼", km: null },
      { name: "砂川", km: null },
      { name: "滝川", km: null },
      { name: "江部乙", km: null },
      { name: "妹背牛", km: null },
      { name: "深川", km: null },
      { name: "納内", km: null },
      { name: "近文", km: null },
      { name: "旭川", km: 170.6 },
    ],
  },
  {
    name: "道南いさりび鉄道",
    nameEn: "SOUTH HOKKAIDO RAILWAY",
    totalKm: 37.8,
    color: "#4a6b8a", // 「いさりび(漁火)」の夜の海をイメージした藍色
    note:
      "2016年、北海道新幹線開業に伴いJR江差線から経営分離された第三セクター路線です。列車は五稜郭〜函館間でJR函館本線に乗り入れます。",
    stations: [
      { name: "五稜郭", km: 0.0 },
      { name: "七重浜", km: null },
      { name: "東久根別", km: null },
      { name: "久根別", km: null },
      { name: "清川口", km: null },
      { name: "上磯", km: null },
      { name: "茂辺地", km: null },
      { name: "渡島当別", km: null },
      { name: "釜谷", km: null },
      { name: "泉沢", km: null },
      { name: "札苅", km: null },
      { name: "木古内", km: 37.8 },
    ],
  },
  {
    name: "北海道新幹線",
    nameEn: "HOKKAIDO SHINKANSEN",
    totalKm: 148.8,
    color: "#8a2be8", // H5系新幹線の帯色(紫)
    note:
      "新青森〜新函館北斗間。新青森駅・奥津軽いまべつ駅は青森県内ですが、JR北海道が運営しています。",
    stations: [
      { name: "新青森", km: 0.0 },
      { name: "奥津軽いまべつ", km: null },
      { name: "木古内", km: null },
      { name: "新函館北斗", km: 148.8 },
    ],
  },
  {
    name: "函館本線(砂原支線)",
    nameEn: "HAKODATE LINE (SAWARA BRANCH)",
    totalKm: 35.3,
    color: "#2f9e7a", // 内浦湾沿いのバイパスをイメージした青緑
    note:
      "大沼〜森間を内浦湾沿いに迂回する通称「砂原支線」。駒ヶ岳経由の本線バイパスとして戦時中に建設されました。普通列車のみ運行、1日5本程度と本数が少ないので計画的に。",
    stations: [
      { name: "大沼", km: 0.0 },
      { name: "鹿部", km: 14.6 },
      { name: "渡島沼尻", km: 20.0 },
      { name: "渡島砂原", km: 25.3 },
      { name: "掛澗", km: 29.0 },
      { name: "尾白内", km: 31.9 },
      { name: "東森", km: 33.5 },
      { name: "森", km: 35.3 },
    ],
  },
  {
    name: "留萌本線",
    nameEn: "RUMOI LINE",
    totalKm: 66.8,
    color: "#5a6b7a", // 廃線を示す、灰みがかった青
    note:
      "2026年3月31日をもって全線廃止(深川〜増毛)。段階的に廃止されたため駅ごとに廃止年が異なります: 2016年(留萌〜増毛間)、2023年(石狩沼田〜留萌間)、2026年(深川〜石狩沼田間)。区間ごとの営業キロは概算で、要確認です。",
    stations: [
      { name: "深川", km: 0.0, abandoned: true }, // 2026年3月廃止
      { name: "北一已", km: 3.9, abandoned: true }, // 2026年3月廃止
      { name: "秩父別", km: 8.5, abandoned: true }, // 2026年3月廃止
      { name: "北秩父別", km: 11.9, abandoned: true }, // 2026年3月廃止
      { name: "石狩沼田", km: 14.4, abandoned: true }, // 2026年3月廃止
      { name: "恵比島", km: 23.3, abandoned: true }, // 2023年4月廃止
      { name: "峠下", km: 29.5, abandoned: true }, // 2023年4月廃止
      { name: "幌糠", km: 34.3, abandoned: true }, // 2023年4月廃止
      { name: "藤山", km: 40.6, abandoned: true }, // 2023年4月廃止
      { name: "大和田", km: 45.3, abandoned: true }, // 2023年4月廃止
      { name: "留萌", km: 50.1, abandoned: true }, // 2023年4月廃止
      { name: "瀬越", km: 53.5, abandoned: true }, // 2016年12月廃止
      { name: "礼受", km: 56.5, abandoned: true }, // 2016年12月廃止
      { name: "阿分", km: 59.5, abandoned: true }, // 2016年12月廃止
      { name: "信砂", km: 61.8, abandoned: true }, // 2016年12月廃止
      { name: "舎熊", km: 63.3, abandoned: true }, // 2016年12月廃止
      { name: "朱文別", km: 65.0, abandoned: true }, // 2016年12月廃止
      { name: "増毛", km: 66.8, abandoned: true }, // 2016年12月廃止
    ],
  },
  {
    name: "根室本線(滝川~富良野)",
    nameEn: "NEMURO LINE (TAKIKAWA-FURANO)",
    totalKm: 54.6,
    color: "#c2703d", // 芦別・富良野の炭鉱と大地をイメージした赤茶
    stations: [
      { name: "滝川", km: 0.0 },
      { name: "赤平", km: null },
      { name: "茂尻", km: null },
      { name: "平岸", km: null },
      { name: "芦別", km: null },
      { name: "上芦別", km: null },
      { name: "野花南", km: null },
      { name: "富良野", km: 54.6 },
    ],
  },
  {
    name: "根室本線(富良野~新得)",
    nameEn: "NEMURO LINE (FURANO-SHINTOKU)",
    totalKm: 81.7,
    color: "#7a6a5a", // 映画「鉄道員」のセピア色の記憶をイメージした褐色
    note:
      "2024年4月1日に全線廃止。東鹿越〜新得間は2016年の台風被害で運休したまま復旧されず廃止となりました。映画『鉄道員(ぽっぽや)』のロケ地として知られる幾寅駅もこの区間にあります。駅ごとの営業キロは要確認です。",
    stations: [
      { name: "富良野", km: 0.0, abandoned: true },
      { name: "布部", km: null, abandoned: true },
      { name: "山部", km: null, abandoned: true },
      { name: "下金山", km: null, abandoned: true },
      { name: "金山", km: null, abandoned: true },
      { name: "東鹿越", km: null, abandoned: true },
      { name: "幾寅", km: null, abandoned: true },
      { name: "落合", km: null, abandoned: true },
      { name: "新得", km: 81.7, abandoned: true },
    ],
  },
  {
    name: "根室本線(新得~釧路)",
    nameEn: "NEMURO LINE (SHINTOKU-KUSHIRO)",
    totalKm: 172.1,
    color: "#1f6f78", // 十勝平野から釧路湿原へ抜ける深い青緑
    note:
      "特急「おおぞら」「とかち」も走る幹線区間(石勝線経由で札幌と直結)。",
    stations: [
      { name: "新得", km: 0.0 },
      { name: "十勝清水", km: null },
      { name: "御影", km: null },
      { name: "芽室", km: null },
      { name: "大成", km: null },
      { name: "西帯広", km: null },
      { name: "柏林台", km: null },
      { name: "帯広", km: null },
      { name: "札内", km: null },
      { name: "幕別", km: null },
      { name: "利別", km: null },
      { name: "池田", km: null },
      { name: "十弗", km: null },
      { name: "豊頃", km: null },
      { name: "新吉野", km: null },
      { name: "浦幌", km: null },
      { name: "厚内", km: null },
      { name: "音別", km: null },
      { name: "白糠", km: null },
      { name: "西庶路", km: null },
      { name: "庶路", km: null },
      { name: "大楽毛", km: null },
      { name: "新大楽毛", km: null },
      { name: "新富士", km: null },
      { name: "釧路", km: 172.1 },
    ],
  },
  {
    name: "根室本線(釧路~根室・花咲線)",
    nameEn: "NEMURO LINE (KUSHIRO-NEMURO / HANASAKI LINE)",
    totalKm: 135.4,
    color: "#d9636f", // 「花咲線」の愛称にちなんだ花のような桃色
    note: "日本最東端の路線。愛称「花咲線」は根室名産の花咲ガニに由来します。",
    stations: [
      { name: "釧路", km: 0.0 },
      { name: "東釧路", km: null },
      { name: "武佐", km: null },
      { name: "別保", km: null },
      { name: "上尾幌", km: null },
      { name: "尾幌", km: null },
      { name: "門静", km: null },
      { name: "厚岸", km: null },
      { name: "茶内", km: null },
      { name: "浜中", km: null },
      { name: "姉別", km: null },
      { name: "厚床", km: null },
      { name: "別当賀", km: null },
      { name: "落石", km: null },
      { name: "昆布盛", km: null },
      { name: "西和田", km: null },
      { name: "根室", km: 135.4 },
    ],
  },
  {
    name: "室蘭本線(長万部~苫小牧)",
    nameEn: "MURORAN LINE (OSHAMAMBE-TOMAKOMAI)",
    totalKm: 135.2,
    color: "#4a7a96", // 噴火湾・室蘭港の鉄鋼の街をイメージした鋼青
    note: "特急「北斗」が走る幹線区間。小幌駅は秘境駅として有名です。区間途中の営業キロは一部要確認です。",
    stations: [
      { name: "長万部", km: 0.0 },
      { name: "静狩", km: null },
      { name: "小幌", km: null },
      { name: "礼文", km: null },
      { name: "大岸", km: null },
      { name: "豊浦", km: null },
      { name: "洞爺", km: null },
      { name: "有珠", km: null },
      { name: "長和", km: null },
      { name: "伊達紋別", km: 57.4 },
      { name: "北舟岡", km: 60.6 },
      { name: "稀府", km: 65.1 },
      { name: "黄金", km: 67.3 },
      { name: "崎守", km: 72.7 },
      { name: "本輪西", km: 77.2 },
      { name: "東室蘭", km: 79.1 },
      { name: "鷲別", km: 86.8 },
      { name: "幌別", km: 92.3 },
      { name: "富浦", km: 94.7 },
      { name: "登別", km: 98.1 },
      { name: "虎杖浜", km: 102.9 },
      { name: "竹浦", km: 105.7 },
      { name: "北吉原", km: 107.8 },
      { name: "萩野", km: 113.6 },
      { name: "白老", km: 119.1 },
      { name: "社台", km: 125.4 },
      { name: "錦岡", km: 130.6 },
      { name: "糸井", km: 132.8 },
      { name: "青葉", km: null },
      { name: "苫小牧", km: 135.2 },
    ],
  },
  {
    name: "室蘭本線(苫小牧~岩見沢)",
    nameEn: "MURORAN LINE (TOMAKOMAI-IWAMIZAWA)",
    totalKm: 75.8,
    color: "#9aa83f", // 空知の田園地帯をイメージした黄緑
    note: "特急の走る長万部〜苫小牧側とは対照的に、普通列車のみのローカル区間です。",
    stations: [
      { name: "苫小牧", km: 0.0 },
      { name: "沼ノ端", km: 8.9 },
      { name: "遠浅", km: 14.3 },
      { name: "早来", km: 20.0 },
      { name: "安平", km: 26.8 },
      { name: "追分", km: 34.8 },
      { name: "三川", km: 38.2 },
      { name: "古山", km: 42.4 },
      { name: "由仁", km: 47.5 },
      { name: "栗山", km: 51.7 },
      { name: "栗丘", km: 55.6 },
      { name: "栗沢", km: 59.9 },
      { name: "志文", km: 67.0 },
      { name: "岩見沢", km: 75.8 },
    ],
  },
  {
    name: "室蘭本線(室蘭支線)",
    nameEn: "MURORAN LINE (MURORAN BRANCH)",
    totalKm: 7.0,
    color: "#e0672e", // 製鉄の街・室蘭の溶鉱炉をイメージした橙
    note: "東室蘭〜室蘭間の支線。かつての室蘭本線本来の起点側にあたります。",
    stations: [
      { name: "東室蘭", km: 0.0 },
      { name: "輪西", km: null },
      { name: "御崎", km: null },
      { name: "母恋", km: null },
      { name: "室蘭", km: 7.0 },
    ],
  },
];
