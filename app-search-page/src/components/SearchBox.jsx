import React, { Component } from 'react';
import './SearchBox.css';

export default class SearchBox extends Component {
  render() {

    return (
      <form className='searchBox'>
        <input type="text"></input>
        <input type="button" value = {this.props.value} />
      </form>
    )
  }
}
