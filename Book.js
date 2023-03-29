import React, { Component } from 'react'

export class Book extends Component {
  render() {
    return (
      <div>
       {this.props.name}by{this.props.author}
      </div>
    )
  }
}

export default Book