import React from 'react'

import Nav from '../../components/Nav/Nav'
import style from './nav.scss'

import NavStore from '../../stores/NavStore'
import * as NavActions from '../../actions/NavActions'

export default class NavContainer extends React.Component {
  constructor(props) {
    super();
    this.getNavState = this.getNavState.bind(this)
    this.state = {
      nav: NavStore.getNavState()
    }
  }

  componentWillMount() {
    NavStore.on("change", this.getNavState);
  }

  componentWillUnmount() {
    NavStore.removeListener("change", this.getNavState);
  }

  getNavState() {
    this.setState({
      nav: NavStore.getNavState()
    })
  }

  handleLogin() {
    NavActions.login()
  }

  handleLogout() {
    NavActions.logout()
    NavActions.toogleAccountMenu()
  }

  toogleAccountMenu() {
    NavActions.toogleAccountMenu()
  }

  toogleLoginMenu() {
    NavActions.toogleLoginMenu()
  }

  render() {
    let isLoggedIn = this.state.nav.isLoggedIn
    let accountMenuDown = this.state.nav.accountMenuDown
    let loginMenuDown = this.state.nav.loginMenuDown

    return (
      <Nav 
        isLoggedIn={ isLoggedIn }
        loginMenuDown={ loginMenuDown }
        accountMenuDown={ accountMenuDown }
        login={ this.handleLogin }
        logout={ this.handleLogout }
        toogleAccountMenu={ this.toogleAccountMenu }
        toogleLoginMenu={ this.toogleLoginMenu } />
    );
  }
}