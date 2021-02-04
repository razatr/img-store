import { ApolloServer } from 'apollo-server-koa'
import { typeDefs, resolvers } from './gql'

const server = new ApolloServer({ typeDefs, resolvers })

export default server
