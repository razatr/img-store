import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { observer } from 'mobx-react-lite'
import Comment from './Comment'
import store from '../../../store'

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

function Comments() {
  const { openImage: id } = store
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

export default observer(Comments)
