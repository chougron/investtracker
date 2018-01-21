import React from 'react'
import Grid from 'material-ui/Grid'
import Graph from './graph/graph'

export default class CapitalPage extends React.Component {
  public render() {
    return (
      <Grid container spacing={16}>
        <Graph />
      </Grid>
    )
  }
}

