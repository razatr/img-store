import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useQuery, gql } from '@apollo/client'
import './body.css'
import ImageBanner from './ImageBanner'

const IMAGES = gql`
  query {
    images {
      title
      url
      id
    }
  }
`

function Body() {
  const { loading, error, data } = useQuery(IMAGES)

  function getCols(rowNumber) {
    const { images } = data
    const cols = []
    let rowKey = ''

    for (let i = 3 * rowNumber; i < 3 * rowNumber + 3; i++) {
      cols.push(
        images[i] ? (
          <Col xs={12} md={4} className="image" key={images[i].id}>
            <ImageBanner img={images[i].url} alt={images[i].title} />
          </Col>
        ) : null
      )
      rowKey = images[i] ? rowKey + images[i].id : rowKey
    }

    return (
      <Row className="images-row" key={rowKey}>
        {cols}
      </Row>
    )
  }

  function getBody() {
    const { images } = data
    const body = []
    const rowsNumber = Math.floor(images.length / 3)

    for (let i = 0; i < rowsNumber; i++) {
      body.push(getCols(i))
    }

    return body
  }

  if (error) {
    return 'Error'
  }

  if (loading) {
    return 'Loading'
  }

  return <Container>{getBody()}</Container>
}

export default Body
