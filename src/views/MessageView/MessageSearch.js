import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { DebounceInput } from 'react-debounce-input';

import ProgressBar from '@/components/ProgressBar'
import MessageCount from './MessageCount'
import ColorSelect from './ColorSelect'

@inject('messageStore')
@observer
export default class MessageSearch extends Component {
  constructor() {
    super()

    this.state = {
      search: {
        q: "",
        color: ""
      }
    }

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange(event) {
    const { name, value } = event.target

    this.setState({
      search: {
        ...this.state.search,
        [name]: value
      }
    }, () => this.props.messageStore.search(this.state.search, name) )
  }

  render() {
    const { messageCount, fetching, searching } = this.props.messageStore

    return (
      <div className="MessageSearch">
        <header className="c1pr40a">
          <div className="c12q1r7z">
            <h2 className="c17zq7b5">Messages</h2>
            <MessageCount count={messageCount} />
            { (() => {
              if (fetching) return <ProgressBar className="c1g8hd9e c1sg2lsz" />
            })() }
          </div>
        </header>

        <section className="c7gtt9t" style={{ marginBottom: 30 }}>
          <div className="c1w33pjg">
            <label className="c1ug13ud" htmlFor="id-50854520">Search</label>
            <div className="c6v0e9l">
              <DebounceInput
                className="cshm1e9"
                id="id-50854520"
                name="q"
                aria-controls="results"
                debounceTimeout={300}
                onChange={this.handleFilterChange}
                type="search" />
              { (() => {
                if (searching) return <ProgressBar className="c1gyy91j c1sg2lsz" />
              })() }
            </div>
          </div>

          <div className="c1e30x2x">
            <label className="c1ug13ud" htmlFor="color-filter">Filter</label>
            <ColorSelect
              ariaControls="results"
              id="color-filter"
              blankOptionText="All Colors"
              name="color"
              onChange={this.handleFilterChange} />
          </div>
        </section>

      </div>
    )
  }
}
