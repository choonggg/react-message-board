import React from 'react'

const MessageItem = ({ message }) => {
  return (
    <li className="cvvv1yb" style={{ background: message.color }}>
      { message.content }
    </li>
  )
}

export default MessageItem
