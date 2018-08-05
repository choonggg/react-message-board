import React from 'react';

import ProgressBar from '@/components/ProgressBar'
import Form from './MessageForm'
import Search from './MessageSearch'
import Lists from './MessageLists'

export default class MessageView extends React.Component {
  render() {
    return(
      <div className="MessageView">

        <header className="MessageView__header c1pr40a">
          <div className="MessageView__header-title cynqhgr">
            <h1 className="c17defmp">Message board</h1>
            <ProgressBar className="c1g8hd9e c1sg2lsz" />
          </div>
          <p className="cp6shng">A place to post and read messages.</p>
        </header>

        <section>
          <Form />
          <Search />
          <Lists />
        </section>
      </div>
    );
  }
}
