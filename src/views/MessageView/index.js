import React from 'react';
import ProgressBar from '@/components/ProgressBar'

export default class MessageView extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div className="MessageView">

        <header class="MessageView__header">
          <div class="MessageView__header-title cynqhgr">
            <h1 className="c17defmp">Message board</h1>
            <ProgressBar />
          </div>
          <p class="cp6shng">A place to post and read messages.</p>
        </header>

      </div>
    );
  }
}
