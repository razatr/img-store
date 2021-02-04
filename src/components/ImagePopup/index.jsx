import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './image-popup.css'
import Image from './Image'
import Comments from './Comments'
import CommentForm from './CommentForm'

function ImagePopup() {
  return (
    <div className="image-popup">
      <Container>
        <Row>
          <Col xs={12} md={9}>
            <Image />
          </Col>
          <Col xs={12} md={3}>
            <Comments />
          </Col>
        </Row>
        <Row>
          <Col>
            <CommentForm />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ImagePopup
