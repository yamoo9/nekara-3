// type NumberOrString = number | string;
// (hexcode: NumberOrString, alpha?: NumberOrString = 1) => string
// '#333' => 'rgba(51, 51, 51, 1)
// 333 => 'rgba(51, 51, 51, 1)
// 0.9 => 0.9
// '90%' => 0.9
export function hex2rgba(hexcode, alpha = 1, useNewSyntax = false) {
  const HEXCODE_TYPE = typeof hexcode;

  if (HEXCODE_TYPE !== 'string' && HEXCODE_TYPE !== 'number') {
    throw new TypeError('hexcode 데이터 값은 숫자 또는 문자만 허용합니다.');
  }

  if (HEXCODE_TYPE === 'string' && hexcode.includes('#')) {
    // '#333', '#333333'
    hexcode = hexcode.slice(1);
  }

  if (HEXCODE_TYPE === 'number') {
    hexcode = hexcode.toString();
  }

  if (hexcode.length === 3) {
    // 333 → 333333
    // fae → ffaaee
    // string → array → map
    hexcode = hexcode
      .split('')
      .map((s) => s.repeat(2))
      .join('');
  }

  // hexcode === 333333 → red (0~255), green (0~255), blue (0~255)
  let r = parseInt(hexcode.slice(0, 2), 16);
  let g = parseInt(hexcode.slice(2, 4), 16);
  let b = parseInt(hexcode.slice(4), 16);

  if (typeof alpha === 'string' && alpha.includes('%')) {
    alpha = Number(alpha.replace('%', '')) / 100;
  }

  if (alpha < 0) alpha = 0;
  if (alpha > 1) alpha = 1;

  if (useNewSyntax) return `rgba(${r} ${g} ${b} / ${alpha * 100 + '%'})`;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
