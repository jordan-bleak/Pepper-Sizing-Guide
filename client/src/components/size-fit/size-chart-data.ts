export interface SizeChartCell {
  size: string;
  alpha: string;
}

export const bustHeadersInch = ['30-32"', '32-33"', '33-34"', '34-35.5"', '35.5-37.5"', '37.5-40"', '40-41"'];

export const sizeChartInch: { underBust: string; cells: (SizeChartCell | null)[] }[] = [
  {
    underBust: '25-26"',
    cells: [
      { size: "30A", alpha: "XXS" },
      { size: "30B", alpha: "XXS" },
      null,
      null,
      null,
      null,
      null,
    ],
  },
  {
    underBust: '27-28"',
    cells: [
      { size: "32AA", alpha: "XS" },
      { size: "32A", alpha: "XS" },
      { size: "32B", alpha: "XS" },
      null,
      null,
      null,
      null,
    ],
  },
  {
    underBust: '29-30"',
    cells: [
      null,
      { size: "34AA", alpha: "S" },
      { size: "34A", alpha: "S" },
      { size: "34B", alpha: "S" },
      null,
      null,
      null,
    ],
  },
  {
    underBust: '31-32"',
    cells: [
      null,
      null,
      { size: "36AA", alpha: "M" },
      { size: "36A", alpha: "M" },
      { size: "36B", alpha: "M" },
      null,
      null,
    ],
  },
  {
    underBust: '33-34"',
    cells: [
      null,
      null,
      null,
      { size: "38AA", alpha: "L" },
      { size: "38A", alpha: "L" },
      { size: "38B", alpha: "L" },
      null,
    ],
  },
  {
    underBust: '35-36"',
    cells: [
      null,
      null,
      null,
      null,
      { size: "40AA", alpha: "XL" },
      { size: "40A", alpha: "XL" },
      { size: "40B", alpha: "XL" },
    ],
  },
];

export const bustHeadersCm = ["76-80CM", "81-84CM", "84-87CM", "87-90CM", "90-96CM", "96-101CM", "101-104CM"];

export const sizeChartCm: { underBust: string; cells: (SizeChartCell | null)[] }[] = [
  {
    underBust: "63-67CM",
    cells: [
      { size: "30A", alpha: "XXS" },
      { size: "30B", alpha: "XXS" },
      null,
      null,
      null,
      null,
      null,
    ],
  },
  {
    underBust: "68-72CM",
    cells: [
      { size: "32AA", alpha: "XS" },
      { size: "32A", alpha: "XS" },
      { size: "32B", alpha: "XS" },
      null,
      null,
      null,
      null,
    ],
  },
  {
    underBust: "73-77CM",
    cells: [
      null,
      { size: "34AA", alpha: "S" },
      { size: "34A", alpha: "S" },
      { size: "34B", alpha: "S" },
      null,
      null,
      null,
    ],
  },
  {
    underBust: "78-82CM",
    cells: [
      null,
      null,
      { size: "36AA", alpha: "M" },
      { size: "36A", alpha: "M" },
      { size: "36B", alpha: "M" },
      null,
      null,
    ],
  },
  {
    underBust: "83-87CM",
    cells: [
      null,
      null,
      null,
      { size: "38AA", alpha: "L" },
      { size: "38A", alpha: "L" },
      { size: "38B", alpha: "L" },
      null,
    ],
  },
  {
    underBust: "88-92CM",
    cells: [
      null,
      null,
      null,
      null,
      { size: "40AA", alpha: "XL" },
      { size: "40A", alpha: "XL" },
      { size: "40B", alpha: "XL" },
    ],
  },
];

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

interface Range {
  min: number;
  max: number;
}

const underbustRangesInch: Range[] = [
  { min: 25, max: 26 },
  { min: 27, max: 28 },
  { min: 29, max: 30 },
  { min: 31, max: 32 },
  { min: 33, max: 34 },
  { min: 35, max: 36 },
];

const bustRangesInch: Range[] = [
  { min: 30, max: 32 },
  { min: 32, max: 33 },
  { min: 33, max: 34 },
  { min: 34, max: 35.5 },
  { min: 35.5, max: 37.5 },
  { min: 37.5, max: 40 },
  { min: 40, max: 41 },
];

const underbustRangesCm: Range[] = [
  { min: 63, max: 67 },
  { min: 68, max: 72 },
  { min: 73, max: 77 },
  { min: 78, max: 82 },
  { min: 83, max: 87 },
  { min: 88, max: 92 },
];

const bustRangesCm: Range[] = [
  { min: 76, max: 80 },
  { min: 81, max: 84 },
  { min: 84, max: 87 },
  { min: 87, max: 90 },
  { min: 90, max: 96 },
  { min: 96, max: 101 },
  { min: 101, max: 104 },
];

function findRangeIndex(value: number, ranges: Range[]): number {
  for (let i = 0; i < ranges.length; i++) {
    if (value >= ranges[i].min && value <= ranges[i].max) return i;
  }
  return -1;
}

export function calculateSize(
  underbust: number,
  bust: number,
  unit: "in" | "cm"
): string | null {
  const underbustRanges = unit === "in" ? underbustRangesInch : underbustRangesCm;
  const bustRanges = unit === "in" ? bustRangesInch : bustRangesCm;
  const chartData = unit === "in" ? sizeChartInch : sizeChartCm;

  const rowIdx = findRangeIndex(underbust, underbustRanges);
  const colIdx = findRangeIndex(bust, bustRanges);

  if (rowIdx === -1 || colIdx === -1) return null;

  const row = chartData[rowIdx];
  if (!row) return null;

  const cell = row.cells[colIdx];
  if (!cell) return null;

  return cell.size;
}
