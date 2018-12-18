import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from '../contex/themeContex';

export default class settings extends Component {
  static propTypes = {
  }

  render() {
    return (
        <ThemeConsumer>
      {(data) => <div>
        <h1>Settings</h1>
        <h1>{data.value}</h1>
      </div>}
      </ThemeConsumer>
    )
  }
}
