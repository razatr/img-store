import React from 'react'
import './image.css'
import { gql, useQuery } from '@apollo/client'
import { observer } from 'mobx-react-lite'
import store from '../../../store'

const GET_IMAGE = gql`
  query($id: String) {
    image(id: $id) {
      title
      url
    }
  }
`

function Image() {
  const { openImage: id } = store
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
    const {
      image: { title, url }
    } = data
    return (
      <img
        src={`http://localhost:3001${url}`}
        alt={title}
        className="image-popup"
      />
    )
  }
}

export default observer(Image)
