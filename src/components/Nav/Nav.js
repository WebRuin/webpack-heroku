import React from 'react'
import { Link } from 'react-router'

import NavLogin from './NavLogin'
import NavLogout from './NavLogout'

export default class Nav extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let loggedIn = this.props.isLoggedIn ? <NavLogout accountMenuDown={ this.props.accountMenuDown } toogleAccountMenu={ this.props.toogleAccountMenu } logout={ this.props.logout } /> : <NavLogin loginMenuDown={ this.props.loginMenuDown } toogleLoginMenu={ this.props.toogleLoginMenu } login={ this.props.login } />
    return (
      <nav>
        <section className='logo'>
          <Link to='/'><h1>Logo</h1></Link>
        </section>
        <section className='link-group'>
          <Link to='/'>Home</Link>
          <Link to='/code'>Code</Link>
          <Link to='/network'>Network</Link>
          <Link to='/security'>Security</Link>
        </section>
        <section className='button-group'>
          { loggedIn }
        </section>
      </nav>
    );
  }
}