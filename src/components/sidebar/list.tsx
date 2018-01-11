import * as React from 'react'
import Capital from '../../models/capital'
import ListItem from './item'

interface ISidebarListProps {
  readonly capitals : ReadonlyArray<Capital>
}

export default class SidebarList extends React.Component<ISidebarListProps, {}> {

  public render(){
    let elements = this.props.capitals.map( (capital) => {
      return (<ListItem capital={capital} ></ListItem>)
    })

    return (<div className="capital-list">
      {elements}
    </div>)
  }
}