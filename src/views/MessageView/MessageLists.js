import React, { Component } from 'react'

import ProgressBar from '@/components/ProgressBar'
import MessageItem from './MessageItem'

export default class MessageSearch extends Component {
  render() {
    return (
      <div className="MessageList">
        <ul className="ccqw98a" aria-live="polite" async="" id="results" role="region">
          <MessageItem />
        </ul>
      </div>
    )
  }
}
