import React, { Component } from 'react'
import SearchBox from './components/SearchBox';
import TitleAndDescription from './components/TitleAndDescription'

export default class App extends Component {
  render() {
    let topicName = "bodyBuilding";
    return (
      <>
      <TitleAndDescription title= "Search" titleDescription = {`Searching for information on ${topicName}`}  />  
      <SearchBox/>
      </>
    )
  }
}
