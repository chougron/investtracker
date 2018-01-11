import * as React from 'react'
import Capital from '../../../models/capital'
import CapitalIcon from '../../components/capital/icon'
import './item.scss'

interface ICapitalListItemProps {
  readonly capital : Capital
}

export default class CapitalListItem extends React.Component<ICapitalListItemProps, {}> {

  public render(){
    let capital = this.props.capital
    let price = capital.currentPrice

    return (<div className="col-xs-3 capital-list-item">
      <div className="capital-list-item-content">
        <div className="row">
          <div className="col-xs-6">
            <CapitalIcon capital={capital}></CapitalIcon>
          </div>
          <div className="col-xs-6 capital-list-item--price">
            {price}
          </div>
        </div>
      </div>
    </div>)
  }
}
