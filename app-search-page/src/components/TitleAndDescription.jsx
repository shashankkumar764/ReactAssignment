import React, { Component } from 'react'
import "./TitleAndDescription.css"

export default class TitleAndDescription extends Component {
  render() {
    return (
      <>
      <p className='title'>
        {this.props.title}
      </p>
      <div className='titleDescription'>
        {this.props.titleDescription}
      </div>
      </>
    )
  }
}
