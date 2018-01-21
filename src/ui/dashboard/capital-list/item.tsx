import * as React from 'react'
import Capital from '../../../models/capital'
import CapitalIcon from '../../components/capital/icon'
import './item.scss'
import Grid from 'material-ui/Grid'

interface ICapitalListItemProps {
  readonly capital : Capital
  clickAction : (...args: any[]) => void
}

export default class CapitalListItem extends React.Component<ICapitalListItemProps, {}> {

  public render(){
    let capital = this.props.capital
    let price = capital.currentPrice
    let clickAction = this.onClick

    return (<Grid item xs={3} onClick={clickAction.bind(this)}>
      <div className="capital-list-item">
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <CapitalIcon capital={capital}></CapitalIcon>
          </Grid>
          <Grid item xs={6} className="capital-list-item--price">
            {price}
          </Grid>
        </Grid>
      </div>
    </Grid>)
  }

  public onClick(){
    let capital = this.props.capital
    this.props.clickAction(capital)
  }
}
