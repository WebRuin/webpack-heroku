import React from 'react'
import { Link } from 'react-router'

import UserStore from '../../stores/UserStore'
import * as UserActions from '../../actions/UserActions'

export default class NavLogout extends React.Component {
  constructor(props) {
    super();
    this.getUsers = this.getUsers.bind(this)
    this.state = {
      users: UserStore.getUsers()
    }
  }

  componentWillMount() {
    UserStore.on("change", this.getUsers);
  }

  componentWillUnmount() {
    UserStore.removeListener("change", this.getUsers);
  }

  getUsers() {
    this.setState({
      users: UserStore.getUsers()
    })
  }

  render() {
    let menuClass = this.props.accountMenuDown ? 'accountMenu open' : 'accountMenu closed'

    return (
      <div>
        <button className='accountButton' onClick={ this.props.toogleAccountMenu }>Account</button>
        <div className={ menuClass }>
          <div>
            <p>{ this.state.users[0].name }</p>
            <p>{ this.state.users[0].email }</p>
          </div>
          <button className='logoutButton' onClick={ this.props.logout }>Logout</button>
        </div>
      </div>
    )
  }
}