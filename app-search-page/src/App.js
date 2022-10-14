import React, { Component } from 'react'
import Card from './components/Card';
import SearchBox from './components/SearchBox';
import TitleAndDescription from './components/TitleAndDescription';
import records from './DUMMY_DATA.json'

export default class App extends Component {
  render() {
    let topicName = "bodyBuilding";
    return (
      <>
      <TitleAndDescription title= "Search" titleDescription = {`Searching for information on ${topicName}`}  />  
      <SearchBox value= "Go"/>
      {
        records.map(value => {
          return(
            <Card title= {value.title} content= {value.content} createdBy = {value.createdBy} createdOn= {value.createdOn}/>
        )
      })}
      </>
    )
  }
}
