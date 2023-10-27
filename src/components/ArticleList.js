
import React, { Component } from 'react'
import Article from './Article'

export class ArticleList extends Component {
    static propTypes = {}

    render() {
        return (
            <main>
                {this.props.posts.map((post, index) => (
                    <Article key={index} post={post} />
                ))}
            </main>
        )
    }
}

export default ArticleList