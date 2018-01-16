import React from 'react'
import CapitalRepository from '../../repositories/capitalRepository'
import CapitalList from './capital-list/list'

export default class Dashboard extends React.Component {
  public render() {
    let capitals = CapitalRepository.getSaved()
    let openNewCapitalPopup = this.openNewCapitalPopup
    return (
      <CapitalList capitals={capitals} newItemClickAction={openNewCapitalPopup}></CapitalList>
    )
  }

  public openNewCapitalPopup() {
    alert("Oh, you clicked !")
  }
}

