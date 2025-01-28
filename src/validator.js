
import { lookupType } from "./lexicon-registry.js";

// This is an implementation of a simple validator for Lexicon. The goal is to
// support validation of course, but also to produce the right structure to
// walk and process Lexicons so as to do the same in multiple contexts.
export function validate (nsid, object) {
  const type = lookupType(nsid);
  if (!type) throw new Error(`Cannot find type "${nsid}"`);
  // Look at object recursively
}
