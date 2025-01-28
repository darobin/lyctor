
import { describe, it } from 'mocha';
import { ok } from 'node:assert';
import { validate } from '../src/nsid.js';

const valid = [
  'com.example.fooBar',
  'net.users.bob.ping',
  'a-0.b-1.c',
  'a.b.c',
  'cn.8.lex.stuff',
];
const invalid = [
  'com.exa💩ple.thing',
  'com.example',
  '7com.example',
  'com.-example',
  'com.example-',
]

describe('NSID', () => {
  it('accepts valid nsids', () => {
    valid.forEach(nsid => ok(validate(nsid), `${nsid} is valid`));
  });
  it('rejects invalid nsids', () => {
    invalid.forEach(nsid => ok(!validate(nsid), `${nsid} is invalid`));
  });
});
