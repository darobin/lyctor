
// Note that there exists a com.atproto.lexicon.schema record, but it only
// contains the lexicon version.
const lexicon = {
  lexicon: 1,
  id: 'it.mycopunk.lyctor.lexicon',
  description: 'The Lexicon for Lexicons',
  defs: {
    main: {
      type: 'object',
      description: 'An object defining a Lexicon',
      required: ['lexicon', 'id', 'defs'],
      properties: {
        lexicon: {
          type: 'integer',
          const: 1,
          description: 'Lexicon language version',
        },
        id: {
          type: 'string',
          format: 'nsid',
          description: 'ID',
        },
        revision: {
          type: 'integer',
          description: 'Revision number',
        },
        description: {
          type: 'string',
          description: 'Description',
        },
        defs: {
          type: 'ref',
          ref: '#defs',
        },
      },
    },
    defs: {
      type: 'object',
      // Lexicons don't have a way to indicate that an object may have arbitrary
      // keys but they in turn have defined types.
      // Further note that we can't really validate based on Lexicon since you
      // can only pick in a union based on $type, as opposed to RelaxNG-style
      // unions in which you walk each branch until you find one that is
      // feasible.
      lyctorArbitratyPropertiesWithType: {
        type: 'union',
        refs: [
          '#null',
          // '#boolean',
          // '#integer',
          // '#string',
          // '#bytes',
          // '#cid-link',
          // '#blob',
          // '#array',
          // '#object',
          // '#params',
          // '#token',
          // '#ref',
          // '#union',
          // '#unknown',
          // '#record',
          // '#query',
          // '#procedure',
          // '#subscription',
        ],
      },
    },
    null: {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          const: 'null',
        },
      },
    },
  },
};

export default lexicon;
