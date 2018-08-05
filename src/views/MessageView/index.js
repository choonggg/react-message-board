import React from 'react';
import { inject, observer } from 'mobx-react'

import ProgressBar from '@/components/ProgressBar'
import Form from './MessageForm'
import Search from './MessageSearch'
import Lists from './MessageLists'

@inject('messageStore')
@observer
export default class MessageView extends React.Component {
  componentDidMount() {
    this.props.messageStore.fetchMessages()
  }

  render() {
    const { loading, messages } = this.props.messageStore

    return(
      <div className="MessageView">

        <header className="MessageView__header c1pr40a">
          <div className="MessageView__header-title cynqhgr">
            <h1 className="c17defmp">Message board</h1>
            { (() => {
              if (loading) {
                return <ProgressBar className="c1g8hd9e c1sg2lsz" />
              }
            })() }
          </div>
          <p className="cp6shng">A place to post and read messages.</p>
        </header>

        <section>
          <Form />
          <Search />
          <Lists messages={messages} />
        </section>
      </div>
    );
  }
}
