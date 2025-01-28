
import Lyctor from '../src/index.js';

// XXX
// - [ ] one thing I want is to distinguish between "incomplete" (is missing some
//       required data) and "invalid" (has some bad values). This means that we
//       can render them differently, notably as incomplete when you just get
//       started with an object.
const harrow = new Lyctor({});
harrow.registerLexicon({
  lexicon: 1,
  id: 'com.berjon.lyctor',
  description: 'Testable Lyctor',
  defs: {
    main: {
      type: 'record',
      required: ['name'],
      properties: {
        name: { type: 'string' },
      },
    },
  },
});
const main = document.querySelector('main');
harrow.render(main);
