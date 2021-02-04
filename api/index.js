import Koa from 'koa'
import koaStatic from 'koa-static'
import server from './src/apollo-server'

const app = new Koa()

app.use(koaStatic('public'))

server.applyMiddleware({ app })

app.listen(3001, () => {
  console.log('Go to http://localhost:3001/graphql to run queries!')
})
