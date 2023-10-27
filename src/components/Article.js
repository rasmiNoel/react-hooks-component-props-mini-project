
import React, { Component } from 'react'

export class Article extends Component {
  static propTypes = {}

  render() {
    return (
        <article>
            <h3>{this.props.post.title}</h3>
            <small>{this.props.post.date}</small>
            <p>{this.props.post.preview}</p>
            <p>{this.props.post.minutes} min read</p>
        </article>
    )
  }
}

export default Article