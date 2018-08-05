import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import ProgressBar from '@/components/ProgressBar'
import ColorSelect from './ColorSelect'

const initialMessage = {
  content: "",
  color: "",
}

@inject('messageStore')
@observer
export default class MessageForm extends Component {
  constructor() {
    super()

    this.state = {
      touched: false,
      message: {
        ...initialMessage
      }
    }

    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormChange(event) {
    const { name, value } = event.target

    this.setState({ message:
      {
        ...this.state.message,
        [name]: value
      }
    })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    this.props.messageStore.createMessage(this.state.message)
    this.setState({ message: { ...initialMessage } })
  }

  handleMessageBlur(value) {
    this.setState({ touched: !value })
  }

  renderButton() {
    const { submitting } = this.props.messageStore

    if (submitting) {
      return (
        <div style={{ width: 121, height: 29 }}>
          <ProgressBar className="c161wjul c1sg2lsz" />
        </div>
      )
    } else {
      return <span>Post message</span>
    }
  }

  render() {
    let { submitting } = this.props.messageStore
    let { content, color } = this.state.message
    let touchedClass = this.state.touched ? 'touched' :  ''

    return(
      <div className="MessageForm">
        <form className="c1pr40a" onSubmit={this.handleFormSubmit}>
          <fieldset className="c6xliwt">
            <legend className="c1rvp5fh">New message</legend>
            <p className="c1ouhqwa">Add a message and optionally pick a color.</p>
            <div className="c1u3f0g5">

              <div className="cz1obge">
                <div className={`error ${ touchedClass }`}>
                  <label className="c1ug13ud" htmlFor="message">Message</label>
                  <input
                    id="message"
                    className="cydik8e"
                    name="content"
                    value={ content }
                    disabled={ submitting }
                    onBlur={ (e) => this.handleMessageBlur(e.target.value) }
                    onChange={this.handleFormChange} />

                  <div className="c11hehzj" role="alert">A message is required</div>
                </div>

                <div>
                  <label className="c1ug13ud" htmlFor="color">Color</label>
                  <ColorSelect
                    id="color"
                    value={color}
                    name="color"
                    onChange={this.handleFormChange}
                    disabled={ submitting } />
                </div>
              </div>

              <div className="c7vrlqv">
                <button className="c13ogcrc" disabled={!content || submitting} type="submit">
                  { this.renderButton() }
                </button>
              </div>

            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
