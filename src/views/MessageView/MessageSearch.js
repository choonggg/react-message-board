import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import ProgressBar from '@/components/ProgressBar'
import MessageCount from './MessageCount'

@inject('messageStore')
@observer
export default class MessageSearch extends Component {

  render() {
    const { messageCount } = this.props.messageStore

    return (
      <div className="MessageSearch">
        <header className="c1pr40a">
          <div className="c12q1r7z">
            <h2 className="c17zq7b5">Messages</h2>
            <MessageCount count={messageCount} />
            <ProgressBar className="c1g8hd9e c1sg2lsz" />
          </div>
        </header>

        <form className="c7gtt9t" style={{ marginBottom: 30 }}>
          <div className="c1w33pjg">
            <label className="c1ug13ud" for="id-50854520">Search</label>
            <div className="c6v0e9l">
              <input type="search" className="cshm1e9" id="id-50854520" aria-controls="results" value=""/>
              { /*  Loader shows when query string is present and is loading */ }
              <ProgressBar className="c1gyy91j c1sg2lsz" />
            </div>
          </div>
          <div className="c1e30x2x">
            <label className="c1ug13ud" for="color-filter">Filter</label>
            <select className="cytasr3" aria-controls="results" id="color-filter">
              <option value="">All colors</option>
              <option value="#2795D9">Blue</option>
              <option value="#672d93">Purple</option>
              <option value="linear-gradient(to right, #e6e600, #f7941d 17%, #fff100 34%, #00a650 51%, #0054a5 68%, #672d93 85%, #672d93)">Rainbow</option>
            </select>
          </div>
        </form>

      </div>
    )
  }
}
