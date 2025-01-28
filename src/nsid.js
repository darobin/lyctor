
// the name is alpha only
const nameSegment = /^[a-z]+$/i;
// domain segments are alpha, num, or dash but not start or end with dash
const domainSegment = /^(?!-)[a-z0-9-]+(?<!-)$/;
// first segment also cannot start with a number
const firstDomainSegment = /^(?![0-9-])[a-z0-9-]+(?<!-)$/;

// https://atproto.com/specs/nsid
// Note that this never accepts a fragment part.
export function validate (str) {
  if (!str) return false;
  // overall
  if (str.length > 317 || str.split('.').length < 3) return false;
  const components = str.split('.');
  const name = components.pop();
  const domain = components.join('.').toLowerCase();
  // domain authority
  if (domain.length > 253) return false;
  if (components.find((c, idx) =>
    c.length < 1 ||
    c.length > 63 ||
    !(idx ? domainSegment.test(c) : firstDomainSegment.test(c))
  )) return false;
  // name
  if (name.length < 1 || name.length > 63 || !nameSegment.test(name)) return false;
  // return normalised
  return `${domain}.${name}`;
}
