import Navigation from '../components/Navigation'
import React, { Component, Fragment } from 'react'
import axios from 'axios'

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <h1>Your new server-side rendered React.js app!</h1>
      </Fragment>
    )
  }
}
