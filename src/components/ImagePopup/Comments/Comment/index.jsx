import React from 'react'

function Comment({ text, author = '' }) {
  return <div>{`${author} ${text}`}</div>
}

export default Comment
