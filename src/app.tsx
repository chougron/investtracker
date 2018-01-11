import React from 'react'
import CapitalRepository from './repositories/capitalRepository'
import CapitalList from './ui/dashboard/capital-list/list'

export default class App extends React.Component {
  public render() {
    let capitals = CapitalRepository.getSaved()
    return (
      <div className="container-full">
        <CapitalList capitals={capitals}></CapitalList>
      </div>
    )
  }
}

