import React from 'react'
import Grid from 'material-ui/Grid'
import Graph from './graph/graph'
import Header from '../components/header/header'
import Capital from '../../models/capital'
import App from '../../app'

interface ICapitalPageProps {
  capital : Capital
}
export default class CapitalPage extends React.Component<ICapitalPageProps, {}> {

  public render() {
    let capital = this.props.capital

    return (
      <Grid container spacing={16}>
        <Header title={capital.name} closeClickAction={this.backToHome}/>
        <Graph />
      </Grid>
    )
  }

  public backToHome = function() {
    let app = App.getInstance()
    app.showDashBoard()
  }
}

