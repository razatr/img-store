import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import './image-popup.css'
import store from '../../store'
import Image from './Image'
import Comments from './Comments'
import CommentForm from './CommentForm'

function ImagePopup() {
  const { openImage } = store
  const isVisible = openImage !== ''
  if (isVisible) {
    return (
      <div className="popup-decorator">
        <div className="image-popup-block">
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
              <Col xs={12} md={9}>
                <CommentForm />
                <button
                  className="image-popup__close"
                  type="button"
                  onClick={() => store.setOpenImage('')}
                >
                  Close
                </button>
              </Col>
              <Col xs={12} md={3} />
            </Row>
          </Container>
        </div>
      </div>
    )
  }
  return null
}

export default observer(ImagePopup)
