import Navigation from '../components/Navigation'
import React, { Component, Fragment } from 'react'
import axios from 'axios'

export default class extends Component {

  static async getInitialProps () {
    const res = await axios.get('https://gcgmarketing.com/wp-json/wp/v2/pages')

    return {
      posts: res.data
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <h1>Our Posts Page!</h1>
        <ul>
          {
            this.props.posts.map( post => {
                return (
                  <li key={ post.id }>{post.title.rendered}</li>
                )
            })
          }
        </ul>
      </Fragment>
    )
  }
}
