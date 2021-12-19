/* eslint-disable no-bitwise */
const moneyFormat = (num, n, x) => {
  const re = `\\d(?=(\\d{${x || 3}})+${n > 0 ? '\\.' : '$'})`;
  // eslint-disable-next-line radix
  return parseInt(num).toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
}
export default moneyFormat
