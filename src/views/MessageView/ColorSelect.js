import React, { Component } from 'react'

export default class ColorSelect extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onChange(event)
  }

  render() {
    return (
      <select
        className="ColorSelect cytasr3"
        value={this.props.value}
        name={this.props.name}
        disabled={this.props.disabled || false}
        aria-controls={this.props.ariaControls}
        onChange={this.handleChange}
        id={this.props.id}>
        <option value="">{ this.props.blankOptionText || "Choose a color..." }</option>
        <option value="#2795D9">Blue</option>
        <option value="#672d93">Purple</option>
        <option value="linear-gradient(to right, #e6e600, #f7941d 17%, #fff100 34%, #00a650 51%, #0054a5 68%, #672d93 85%, #672d93)">Rainbow</option>
      </select>
    )
  }
}
