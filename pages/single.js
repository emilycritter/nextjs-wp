import Navigation from '../components/Navigation'
import React, { Component } from 'react'
import axios from 'axios';
import { Fragment } from 'react'

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps( context ) {

    const slug = context.query.slug

    // Make request for posts.
    const response = await axios.get( `https://gcgmarketing.com/wp-json/wp/v2/pages?slug=${ slug }` )

    // Return our only item in array from response to posts object in props.
    return {
      post: response.data[0]
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation/>
        <h1>Your soon to be single post!</h1>
      </Fragment>
    )
  }
}
