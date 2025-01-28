
import { readFile } from 'node:fs/promises';
import { isDefined, isInteger, isString, isObject } from "./checkers.js";
import { validate } from "./nsid.js";

const lexiconRegistry = {};

export function registerLexicon (lex) {
  if (!validate(lex.id)) throw new Error(`Cannot register invalid NSID "${lex.id}"`);
  lexiconRegistry[lex.id] = lex;
}
export function lookupLexicon (id) {
  return lexiconRegistry[id];
}

export function registerType (id, name, type) {
  if (!validate(id)) throw new Error(`Cannot register invalid NSID "${id}"`);
  lexiconRegistry[`${id}#${name || 'main'}`] = type;
}
export function lookupType (id, name) {
  return lexiconRegistry[`${id}#${name || 'main'}`];
}

// This takes an already loaded JSON.
export function loadLexicon (lex) {
  if (lex.lexicon !== 1) throw new Error(`Lexicon must be version 1`);
  if (!validate(lex.id)) throw new Error(`Lexicon has invalid NSID "${lex.id}"`);
  if (isDefined(lex.revision) && !isInteger(lex.revision)) {
    throw new Error(`Lexicon revision must be a number`);
  }
  if (isDefined(lex.description) && !isString(lex.description)) {
    throw new Error(`Lexicon description must be a string`);
  }
  if (!isObject(lex.defs)) throw new Error(`Lexicon defs must be an object`);
  // TODO: we don't currently validate types before runtime
  registerLexicon(lex);
  Object.keys(lex.defs).forEach(k => {
    registerType(lex.id, k, lex.defs[k]);
  });
}

export async function readLexiconFile (path) {
  return JSON.parse(await readFile(path));
}
