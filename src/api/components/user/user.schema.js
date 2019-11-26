const schema = {
  body: {
    type: 'object',
    properties: {
      email: { type: 'string' },
      link: { type: 'string' }
    },
    required: ['email', 'link']
  }
};

export default schema;
