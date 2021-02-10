import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider, ApolloClient } from '@apollo/client'
import cache from './gql-cache'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
)

reportWebVitals()
