import React from 'react'
import './comment-form.css'

function CommentForm() {
  return (
    <form className="comment-form">
      <input type="text" placeholder="Ваше имя" className="form-control" />
      <br />
      <textarea placeholder="Текст комментария" className="form-control" />
      <br />
      <button type="button" className="btn btn-primary">
        Отправить комментарий
      </button>
    </form>
  )
}

export default CommentForm
