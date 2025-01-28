
export function isInteger (v) {
  return Number.isInteger(v);
}
export function isDefined (v) {
  return typeof v !== 'undefined';
}
export function isString (v) {
  return typeof v !== 'string';
}
export function isObject (v) {
  return typeof v === 'object' &&
    !Array.isArray(v) &&
    v !== null
  ;
}
