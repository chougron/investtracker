import * as React from 'react'
import Capital from '../../../models/capital'
import './icon.scss'

interface ICapitalIconProps {
  readonly capital : Capital
}

export default class CapitalIcon extends React.Component<ICapitalIconProps, {}> {

  public render(){
    let abbreviation = this.props.capital.abbreviation;

    return (<div className="capital-icon">
      {abbreviation}
    </div>)
  }
}
