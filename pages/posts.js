import Navigation from '../components/Navigation'
import React, { Component, Fragment } from 'react'
import Link from 'next/link'
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
                  <li key={ post.id }>
                      <Link href={ `/posts/${ post.slug }` }>
                          <a href={ `/posts/${ post.slug }` }>
                              { post.title.rendered }
                          </a>
                      </Link>
                  </li>
                )
            })
          }
        </ul>
      </Fragment>
    )
  }
}
