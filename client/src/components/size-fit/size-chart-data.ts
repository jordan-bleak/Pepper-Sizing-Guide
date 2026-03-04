export interface SizeChartCell {
  size: string;
  alpha: string;
}

export const sizeChartInch: { underBust: string; cells: (SizeChartCell | null)[] }[] = [
  {
    underBust: '25-26"',
    cells: [
      null,
      null,
      { size: "30A", alpha: "XXS" },
      { size: "30B", alpha: "XXS" },
    ],
  },
  {
    underBust: '27-28"',
    cells: [
      null,
      { size: "32AA", alpha: "XS" },
      { size: "32A", alpha: "XS" },
      { size: "32B", alpha: "XS" },
    ],
  },
  {
    underBust: '29-30"',
    cells: [
      null,
      { size: "34AA", alpha: "S" },
      { size: "34A", alpha: "S" },
      { size: "34B", alpha: "S" },
    ],
  },
  {
    underBust: '31-32"',
    cells: [
      null,
      { size: "36AA", alpha: "M" },
      { size: "36A", alpha: "M" },
      { size: "36B", alpha: "M" },
    ],
  },
  {
    underBust: '33-34"',
    cells: [
      null,
      { size: "38AA", alpha: "L" },
      { size: "38A", alpha: "L" },
      { size: "38B", alpha: "L" },
    ],
  },
  {
    underBust: '35-36"',
    cells: [
      null,
      { size: "40AA", alpha: "XL" },
      { size: "40A", alpha: "XL" },
      { size: "40B", alpha: "XL" },
    ],
  },
];

export const bustHeadersInch = ['30-32"', '32-33"', '34-35"', '36-37"'];

export const sizeChartCm: { underBust: string; cells: (SizeChartCell | null)[] }[] = [
  {
    underBust: "63-66 cm",
    cells: [
      null,
      null,
      { size: "30A", alpha: "XXS" },
      { size: "30B", alpha: "XXS" },
    ],
  },
  {
    underBust: "68-71 cm",
    cells: [
      null,
      { size: "32AA", alpha: "XS" },
      { size: "32A", alpha: "XS" },
      { size: "32B", alpha: "XS" },
    ],
  },
  {
    underBust: "73-76 cm",
    cells: [
      null,
      { size: "34AA", alpha: "S" },
      { size: "34A", alpha: "S" },
      { size: "34B", alpha: "S" },
    ],
  },
  {
    underBust: "78-81 cm",
    cells: [
      null,
      { size: "36AA", alpha: "M" },
      { size: "36A", alpha: "M" },
      { size: "36B", alpha: "M" },
    ],
  },
  {
    underBust: "83-86 cm",
    cells: [
      null,
      { size: "38AA", alpha: "L" },
      { size: "38A", alpha: "L" },
      { size: "38B", alpha: "L" },
    ],
  },
  {
    underBust: "88-91 cm",
    cells: [
      null,
      { size: "40AA", alpha: "XL" },
      { size: "40A", alpha: "XL" },
      { size: "40B", alpha: "XL" },
    ],
  },
  {
    underBust: "93-97 cm",
    cells: [
      null,
      { size: "42AA", alpha: "XXL" },
      { size: "42A", alpha: "XXL" },
      { size: "42B", alpha: "XXL" },
    ],
  },
];

export const bustHeadersCm = ["76-81 cm", "81-84 cm", "86-89 cm", "91-94 cm"];

export const conversionData = [
  { us: "30A", alpha: "XXS", uk: "30A", eu: "65A", aus: "8A", fr: "80A", it: "0A", jp: "65B" },
  { us: "30B", alpha: "XXS", uk: "30B", eu: "65B", aus: "8B", fr: "80B", it: "0B", jp: "65C" },
  { us: "32AA", alpha: "XS", uk: "32AA", eu: "70AA", aus: "10AA", fr: "85AA", it: "1AA", jp: "70A" },
  { us: "32A", alpha: "XS", uk: "32A", eu: "70A", aus: "10A", fr: "85A", it: "1A", jp: "70B" },
  { us: "32B", alpha: "XS", uk: "32B", eu: "70B", aus: "10B", fr: "85B", it: "1B", jp: "70C" },
  { us: "34AA", alpha: "S", uk: "34AA", eu: "75AA", aus: "12AA", fr: "90AA", it: "2AA", jp: "75A" },
  { us: "34A", alpha: "S", uk: "34A", eu: "75A", aus: "12A", fr: "90A", it: "2A", jp: "75B" },
  { us: "34B", alpha: "S", uk: "34B", eu: "75B", aus: "12B", fr: "90B", it: "2B", jp: "75C" },
  { us: "36AA", alpha: "M", uk: "36AA", eu: "80AA", aus: "14AA", fr: "95AA", it: "3AA", jp: "80A" },
  { us: "36A", alpha: "M", uk: "36A", eu: "80A", aus: "14A", fr: "95A", it: "3A", jp: "80B" },
  { us: "36B", alpha: "M", uk: "36B", eu: "80B", aus: "14B", fr: "95B", it: "3B", jp: "80C" },
  { us: "38AA", alpha: "L", uk: "38AA", eu: "85AA", aus: "16AA", fr: "100AA", it: "4AA", jp: "85A" },
  { us: "38A", alpha: "L", uk: "38A", eu: "85A", aus: "16A", fr: "100A", it: "4A", jp: "85B" },
  { us: "38B", alpha: "L", uk: "38B", eu: "85B", aus: "16B", fr: "100B", it: "4B", jp: "85C" },
  { us: "40AA", alpha: "XL", uk: "40AA", eu: "90AA", aus: "18AA", fr: "105AA", it: "5AA", jp: "90A" },
  { us: "40A", alpha: "XL", uk: "40A", eu: "90A", aus: "18A", fr: "105A", it: "5A", jp: "90B" },
  { us: "40B", alpha: "XL", uk: "40B", eu: "90B", aus: "18B", fr: "105B", it: "5B", jp: "90C" },
];

export function calculateSize(
  bandOrUnderbust: number,
  bustSize: number,
  unit: "in" | "cm"
): string | null {
  let bandNum: number;
  let diff: number;

  if (unit === "in") {
    bandNum = Math.round(bandOrUnderbust);
    if (bandNum % 2 !== 0) bandNum += 1;
    diff = bustSize - bandOrUnderbust;
  } else {
    if (bandOrUnderbust <= 66) bandNum = 30;
    else if (bandOrUnderbust <= 71) bandNum = 32;
    else if (bandOrUnderbust <= 76) bandNum = 34;
    else if (bandOrUnderbust <= 81) bandNum = 36;
    else if (bandOrUnderbust <= 86) bandNum = 38;
    else if (bandOrUnderbust <= 91) bandNum = 40;
    else if (bandOrUnderbust <= 97) bandNum = 42;
    else return null;

    const bustInches = bustSize / 2.54;
    const underbustInches = bandOrUnderbust / 2.54;
    diff = bustInches - underbustInches;
  }

  if (bandNum < 30 || bandNum > 42) return null;

  let cup: string;
  if (diff < 0.5) cup = "AA";
  else if (diff < 1.5) cup = "A";
  else if (diff < 2.5) cup = "B";
  else return null;

  if (bandNum === 30 && cup === "AA") return null;
  if (bandNum === 42 && unit === "in") return null;

  return `${bandNum}${cup}`;
}
