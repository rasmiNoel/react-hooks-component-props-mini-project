
import React, { Component } from 'react'

export class Header extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <header>
                    <h1>{this.props.name}</h1>
                </header>
            </div>
        )
    }
}

export default Header