import * as React from 'react'
import Capital from '../../models/capital'

interface ISidebarItemProps {
  readonly capital : Capital
}


export default class SidebarItem extends React.Component<ISidebarItemProps, {}> {

  public render(){
    const capital = this.props.capital
    return (<span>{capital.name}</span>)
  }
}