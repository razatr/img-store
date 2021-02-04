import React from 'react'
import { gql, useQuery } from '@apollo/client'
import Comment from './Comment'

const GET_COMMENTS = gql`
  query($id: String) {
    image(id: $id) {
      comments {
        id
        text
      }
    }
  }
`

function Comments({ id = '41e5ee9f-0b1a-4d90-9e44-f2d218986e89' }) {
  const { loading, error, data } = useQuery(GET_COMMENTS, {
    variables: { id }
  })

  if (error) {
    return 'Error'
  }

  if (loading) {
    return 'Loading'
  }

  if (data) {
    const {
      image: { comments }
    } = data
    return (
      <div>
        {comments.map(({ id: commentId, text }) => (
          <Comment text={text} key={commentId} />
        ))}
      </div>
    )
  }
}

export default Comments
