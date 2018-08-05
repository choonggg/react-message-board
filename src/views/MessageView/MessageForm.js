import React, { Component } from 'react';

import ProgressBar from '@/components/ProgressBar'

export default class MessageForm extends Component {
  constructor() {
    super()

    this.state = {
      touched: false,
      submitting: false,
      form: {
        message: "",
        color: undefined,
      }
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  updateForm(data) {
    this.setState({ form: data })
  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.setState({ submitting: true })
  }

  handleMessageBlur(value) {
    this.setState({ touched: !value })
  }

  renderButton() {
    if (this.state.submitting) {
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
    let { submitting } = this.state
    let { message } = this.state.form
    let touchedClass = this.state.touched ? 'touched' :  ''

    return(
      <div className="MessageForm">
        <form className="c1pr40a" onSubmit={this.handleFormSubmit}>
          <fieldset className="c6xliwt">
            <legend className="c1rvp5fh">New message</legend>
            <p className="c1ouhqwa">Add a message and optionally pick a color.</p>
            <div className="c1u3f0g5">

              <div className="cz1obge">
                { /* Error message is shown if user leaves input without filling it in. Use class .touched */ }
                <div className={`error ${ touchedClass }`}>
                  <label className="c1ug13ud" htmlFor="message">Message</label>
                  <input
                    id="message"
                    className="cydik8e"
                    value={ message }
                    onBlur={ (e) => this.handleMessageBlur(e.target.value) }
                    onChange={ (e) => this.updateForm({ message: e.target.value }) } />
                  <div className="c11hehzj" role="alert">A message is required</div>
                </div>
                <div>
                  <label className="c1ug13ud" htmlFor="color">Color</label>
                  <select id="color" className="cytasr3">
                    <option>Choose a color...</option>
                    <option value="#2795D9">Blue</option>
                    <option value="#672d93">Purple</option>
                    <option value="linear-gradient(to right, #e6e600, #f7941d 17%, #fff100 34%, #00a650 51%, #0054a5 68%, #672d93 85%, #672d93)">Rainbow</option>
                  </select>
                </div>
              </div>


                <div className="c7vrlqv">
                  { /* button is disabled if message is empty or request is in progress */ }
                  <button className="c13ogcrc" disabled={!message || submitting} type="submit">
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
