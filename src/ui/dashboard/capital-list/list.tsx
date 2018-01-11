import * as React from 'react'
import Capital from '../../../models/capital'
import CapitalListItem from './item'
import CapitalListItemAdder from './itemAdder'
import './list.scss'

interface ICapitalListProps {
  readonly capitals : ReadonlyArray<Capital>
}

export default class CapitalList extends React.Component<ICapitalListProps, {}> {

  public render(){
    let elements = this.props.capitals.map( (capital) => {
      return (<CapitalListItem capital={capital} ></CapitalListItem>)
    })

    return (<div className="col-xs-12 capital-list">
        {elements}
        <CapitalListItemAdder></CapitalListItemAdder>
    </div>)
  }
}
