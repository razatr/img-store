const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const { images } = require('./server/image')

// The GraphQL schema in string form
const typeDefs = `
  type Query { images: [Image], image(id:String): Image }
  type Image { title: String, url: String, id: String }
`

// The resolvers
const resolvers = {
  Query: {
    images: () => images,
    image: (_, args) => images.find((image) => image.id === args.id)
  }
}

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

// Initialize the app
const app = express()

app.use(cors())

app.use(express.static('public'))

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

// Start the server
app.listen(3001, () => {
  console.log('Go to http://localhost:3001/graphiql to run queries!')
})
