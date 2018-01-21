import * as React from 'react'
import Capital from '../../../models/capital'
import CapitalListItem from './item'
import CapitalListItemAdder from './itemAdder'
import './list.scss'
import Grid from 'material-ui/Grid'
import App from '../../../app'

interface ICapitalListProps {
  capitals : Array<Capital>
  newItemClickAction : () => void
}

export default class CapitalList extends React.Component<ICapitalListProps, {}> {

  public render(){
    let capitalClickAction = this.capitalClickAction
    let elements = this.props.capitals.map( (capital) => {
      return (<CapitalListItem capital={capital} clickAction={capitalClickAction}></CapitalListItem>)
    })

    let clickAction = this.props.newItemClickAction

    return (<Grid container spacing={16} className="capital-list">
        {elements}
        <CapitalListItemAdder clickAction={clickAction}></CapitalListItemAdder>
    </Grid>)
  }

  public capitalClickAction(...args : any[]){
    console.log("Click list")
    console.log(args)
    let capital = args[0]
    let app = App.getInstance()
    app.showCapitalPage(capital)
  }
}
