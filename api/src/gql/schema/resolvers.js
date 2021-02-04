import { images, comments } from '../data'

export const resolvers = {
  Query: {
    images: () => images,
    image: (_, { id }) => images.find((image) => image.id === id)
  },
  Image: {
    comments: (parent) => {
      console.log(parent)
      return comments.filter((comment) => parent.comments.includes(comment.id))
    }
  }
}
