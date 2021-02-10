import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        monthForNumber: {
          keyArgs: ['id']
        }
      }
    }
  }
})

export default cache
