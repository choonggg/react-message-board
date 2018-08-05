import React, { Component } from 'react'
import ProgressBar from '@/components/ProgressBar'

export default class MessageSearch extends Component {
  render() {
    return (
      <div className="MessageSearch">
        <header className="c1pr40a">
          <div className="c12q1r7z">
            <h2 className="c17zq7b5">Messages</h2>
            <p>
              <span className="ca2ougy">There are </span>
              <span className="c1lerdlx">5</span>
              <span className="ca2ougy">messages showing</span>
            </p>
            <ProgressBar className="c1g8hd9e c1sg2lsz" />
          </div>
        </header>
      </div>
    )
  }
}
