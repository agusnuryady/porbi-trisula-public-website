import React, { Component } from 'react'

export default class EmptyLayout extends Component {
    render() {
        return (
            <div>
                <section>
                    {this.props.children}
                </section>
            </div>
        )
    }
}
