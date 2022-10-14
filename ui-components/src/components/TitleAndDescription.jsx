import React, { Component } from 'react'

export default class TitleAndDescription extends Component {
  render() {
    return (
      <>
      <h1 className='title'>
        {this.props.title}
      </h1>
      <div className='titleDescription'>
        {this.props.titleDescription}
      </div>
      </>
    )
  }
}
