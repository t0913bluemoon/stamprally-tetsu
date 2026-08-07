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
];
