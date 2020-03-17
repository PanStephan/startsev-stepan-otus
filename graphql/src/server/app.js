const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
const schema = require('./schema/schema')

const app = express()

const MONGO_KEY = `mongodb+srv://stepan:R_U_MINE@cluster0-pvmbo.mongodb.net/test?retryWrites=true&w=majority`
mongoose
  .connect(MONGO_KEY, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((e) => console.log('error DB', e))

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))

app.listen(4000)

console.log('Running a GraphQL API server at http://localhost:4000/graphql')