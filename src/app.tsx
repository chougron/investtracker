import React from 'react'
import Dashboard from './ui/dashboard/dashboard'
import Reboot from 'material-ui/Reboot'

export default class App extends React.Component {
  public render() {
    return (
    <div>
      <Reboot />
      
      <Dashboard />
    </div>
    )
  }
}

