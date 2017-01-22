import React from 'react'
import { Link } from 'react-router'

import UserStore from '../../stores/UserStore'
import * as UserActions from '../../actions/UserActions'

export default class NavLogin extends React.Component {
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

  handleUserLogin(event) {
    event.preventDefault()

    const user = {
      id: this.state.users.length + 1,
      name: this.refs.name.value,
      email: this.refs.email.value
    }
    
    this.props.login()
    this.props.toogleLoginMenu()
    UserActions.addUser(user)
    console.log('hi there ' + user)
  }

  render() {
    let menuClass = this.props.loginMenuDown ? 'loginMenu open' : 'loginMenu closed'

    return (
      <div>
        <button className='loginButton' onClick={ this.props.toogleLoginMenu }>Login</button>
        <div className={ menuClass }>
          <form className='userLoginForm' ref='userLoginForm'>
            <div>
              <lable for='name'>Name</lable>
              <input id='name' ref='name' />
            </div>
            <div>
              <lable for='email'>Email</lable>
              <input id='email' ref='email' />
            </div>
            <button onClick={ this.handleUserLogin.bind(this) }>Login</button>
          </form>
        </div>
      </div>
    )
  }
}