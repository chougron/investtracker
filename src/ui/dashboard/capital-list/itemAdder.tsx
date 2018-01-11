import * as React from 'react'
import './itemAdder.scss'

interface ICapitalListItemAdderProps {
}

export default class CapitalListItemAdder extends React.Component<ICapitalListItemAdderProps, {}> {

  public render(){
    return (<div className="col-xs-3 capital-list-item">
      <div className="capital-list-item-content item-adder">
        +
      </div>
    </div>)
  }
}
