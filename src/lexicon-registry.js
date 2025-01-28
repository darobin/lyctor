
const lexiconRegistry = {};

export function registerType (id, name, type) {
  lexiconRegistry[`${id}#${name || 'main'}`] = type;
}
