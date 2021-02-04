import React from 'react'
import './image.css'
import { gql, useQuery } from '@apollo/client'

const GET_IMAGE = gql`
  query($id: String) {
    image(id: $id) {
      title
      url
    }
  }
`

function Image({ id = '41e5ee9f-0b1a-4d90-9e44-f2d218986e89' }) {
  const { loading, error, data } = useQuery(GET_IMAGE, {
    variables: { id }
  })

  if (error) {
    return 'Error'
  }

  if (loading) {
    return 'Loading'
  }

  if (data) {
    return (
      <img
        src="http://localhost:3001/img/forest-from-above.jpg"
        alt="forest-from-above"
        className="image-popup"
      />
    )
  }
}

export default Image
