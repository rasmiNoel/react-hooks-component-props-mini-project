import React, { Component } from 'react'
import blogData from "../data/blog";

export class About extends Component {
    render() {
        return (
            <aside>
                <img src={blogData.image} alt="blog logo"></img>
                <p>{blogData.about}</p>
            </aside>
        )
    }
}

export default About