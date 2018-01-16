import * as React from 'react'
import './itemAdder.scss'
import Grid from 'material-ui/Grid'

interface ICapitalListItemAdderProps {
  clickAction : () => void
}

export default class CapitalListItemAdder extends React.Component<ICapitalListItemAdderProps, {}> {

  public render(){
    let clickAction = this.props.clickAction

    return (
      <Grid item xs={3} onClick={clickAction}>
        <div className="capital-list-item item-adder">
          +
        </div>
      </Grid>)
  }
}
