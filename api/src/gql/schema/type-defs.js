export const typeDefs = `
  type Image {
    id: ID!
    title: String
    url: String
    comments: [Comment]
  }

  type Query {
    images: [Image]
    image(id: String): Image
  }

  type Comment {
    id: ID!
    text: String
  }
`
