import React, { Component } from 'react'

import ProgressBar from '@/components/ProgressBar'
import MessageItem from './MessageItem'

export default class MessageSearch extends Component {
  messageItems() {
    return this.props.messages.map(message =>
      <MessageItem key={message.id} message={message} />
    )
  }

  render() {
    const messages = this.message

    return (
      <div className="MessageList">
        <ul className="ccqw98a" aria-live="polite" async="" id="results" role="region">
          { this.messageItems() }
        </ul>
      </div>
    )
  }
}
