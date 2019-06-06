import Navigation from '../components/Navigation'
import React, { Component, Fragment } from 'react'
import axios from 'axios'

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Head>
          <title>This is our page title!</title>
          <meta name="description" content="This is an example of a meta description. This will show up in search results." />
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <h1>Your new server-side rendered React.js app!</h1>
      </Fragment>
    )
  }
}
