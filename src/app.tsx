import React from 'react'
import Dashboard from './ui/dashboard/dashboard'
import Reboot from 'material-ui/Reboot'
import Capital from './models/capital'
import CapitalPage from './ui/capital-page/capitalPage'

interface IAppState {
  /** The page correspond to the screen to show */
  page: AppPage,
  /** The currentCapital is the one we are currently checking */
  currentCapital?: Capital
}

export default class App extends React.Component<{}, IAppState> {

  constructor(props: {}) {
    super(props)
    App.singleton = this
    this.state = {page: AppPage.Dashboard}
  }

  static singleton : App
  public static getInstance() : App{
    return App.singleton
  }

  public render() {
    let appRender = this.getAppRender();
    return (
    <div>
      <Reboot />
      {appRender}
    </div>
    )
  }

  /**
   * Render the app depending of the page we are in
   */
  public getAppRender() {
    switch(this.state.page){
      case null:
      case AppPage.Dashboard:
        return (<Dashboard />)
      case AppPage.CapitalPage:
        let capital = this.state.currentCapital as Capital
        return (<CapitalPage capital={capital} />)
    }
  }

  /**
   * Set the page to show as the dashboard
   */
  public showDashBoard() {
    this.setState({page: AppPage.Dashboard})
  }

  /**
   * Set the page to show as a capital page
   * @param capital The capital to show
   */
  public showCapitalPage(capital : Capital) {
    this.setState({page: AppPage.CapitalPage, currentCapital: capital})
  }
}

/** The different pages of the app */
enum AppPage {
  Dashboard,
  CapitalPage
}