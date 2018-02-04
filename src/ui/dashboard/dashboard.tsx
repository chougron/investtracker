import React from 'react'
import CapitalRepository from '../../repositories/capitalRepository'
import CapitalList from './capital-list/list'
import Auction from '../../models/auction'
import Capital from '../../models/capital'

interface IDashboardState {
  loaded: boolean
}

export default class Dashboard extends React.Component<{}, IDashboardState> {
  capitals: Array<Capital> = []

  constructor(props: {}) {
    super(props)
    this.state = {loaded: false}
  }

  public render() {
    let capitals = this.capitals
    if(!this.state.loaded){
      this.loadCapitals()
    }
    let openNewCapitalPopup = this.openNewCapitalPopup
    return (
      <CapitalList capitals={capitals} newItemClickAction={openNewCapitalPopup}></CapitalList>
    )
  }

  /**
   * Add a new capital to the list
   */
  public openNewCapitalPopup = () => {
    let capital = new Auction('New','NN',202.54)
    CapitalRepository.save(capital).then(() => {
      this.setState({loaded: false})
    }, (reason) => {
      console.log(reason)
    })
  }

  /**
   * Load the capitals from the database then refresh the display once it is done
   */
  public loadCapitals = () => {
    CapitalRepository.getAll().then((capitals) => {
      this.capitals = capitals
      this.setState({loaded: true})
    })
  }
}

