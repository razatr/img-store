export const typeDefs = `
  type Image {
    id: String
    title: String
    url: String
    comments: [Comment]
  }

  type Query {
    images: [Image]
    image(id: String): Image
  }

  type Comment {
    id: String!
    text: String
  }
`
