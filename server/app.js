const express = require('express');

const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () =>
  console.log('Server listening on port http://localhost:4000'),
);
