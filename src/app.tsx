import React from 'react'
import Dashboard from './ui/dashboard/dashboard'
import Reboot from 'material-ui/Reboot'
import Capital from './models/capital'
import CapitalPage from './ui/capital-page/capitalPage'

export default class App extends React.Component {

  static singleton : App
  public static getInstance() : App{
    return App.singleton
  }

  constructor(props : any) {
    super(props)
    App.singleton = this
  }

  page : AppState = AppState.Dashboard
  currentCapital : Capital

  public render() {
    console.log("Rendered");
    console.log(this.state);
    let appRender = this.getAppRender();
    return (
    <div>
      <Reboot />
      {appRender}
    </div>
    )
  }

  public getAppRender() {
    switch(this.page){
      case null:
      case AppState.Dashboard:
        console.log("Dashboard");
        return (<Dashboard />)
      case AppState.CapitalPage:
        console.log("Capital Page");
        let capital = this.currentCapital
        return (<CapitalPage capital={capital} />)
    }
  }

  public showDashBoard() {
    this.page = AppState.Dashboard
    this.setState({})
  }

  public showCapitalPage(capital : Capital) {
    this.page = AppState.CapitalPage
    this.currentCapital = capital
    this.setState({})
  }
}

enum AppState {
  Dashboard,
  CapitalPage
}