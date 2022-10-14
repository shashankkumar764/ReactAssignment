import React, { Component } from 'react';
import "./Card.css"

export default class Card extends Component {
  render() {
    return (
         <>
            <p className='cardTitle'>{this.props.title} </p>
            <p className='cardTitleDescription'>{this.props.content}</p>
            <span className='createdBy'>{this.props.createdBy}</span>
            <span className='createdOn'> {`submitted on ${this.props.createdOn}`}</span> 
         </>
    )
  }
}
