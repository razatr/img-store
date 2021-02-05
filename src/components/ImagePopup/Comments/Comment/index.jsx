import React from 'react'

function Comment({ text, author = 'Анонимный странник' }) {
  return (
    <div>
      <span>{author}</span>
      <br />
      <span>{text}</span>
    </div>
  )
}

export default Comment
