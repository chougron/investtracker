import * as React from 'react'
import Capital from '../../../models/capital'
import CapitalListItem from './item'
import CapitalListItemAdder from './itemAdder'
import './list.scss'
import Grid from 'material-ui/Grid'

interface ICapitalListProps {
  capitals : Array<Capital>
  newItemClickAction : () => void
}

export default class CapitalList extends React.Component<ICapitalListProps, {}> {

  public render(){
    let elements = this.props.capitals.map( (capital) => {
      return (<CapitalListItem capital={capital} ></CapitalListItem>)
    })

    let clickAction = this.props.newItemClickAction

    return (<Grid container spacing={16} className="capital-list">
        {elements}
        <CapitalListItemAdder clickAction={clickAction}></CapitalListItemAdder>
    </Grid>)
  }
}
