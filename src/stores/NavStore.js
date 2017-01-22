import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class NavStore extends EventEmitter {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      accountMenuDown: false,
      loginMenuDown: false
    }
  }

  login() {
    if ( this.state.isLoggedIn == false ) {
      this.state.isLoggedIn = true
      this.emit("change")
    }
  }

  logout() {
    if ( this.state.isLoggedIn == true ) {
      this.state.isLoggedIn = false
      this.emit("change")
    }
  }

  toogleAccountMenu() {
    this.state.accountMenuDown = !this.state.accountMenuDown
    this.emit("change")
  }

  toogleLoginMenu() {
    this.state.loginMenuDown = !this.state.loginMenuDown
    this.emit("change")
  }

  getNavState() {
    return this.state;
  }

  handleActions(action) {
    switch(action.type) {
      case "TOOGLE_ACCOUNT_MENU": {
        this.toogleAccountMenu();
        break;
      }
      case "TOOGLE_LOGIN_MENU": {
        this.toogleLoginMenu();
        break;
      }
      case "LOGIN": {
        this.login();
        break;
      }
      case "LOGOUT": {
        this.logout();
        break;
      }
    }
  }

}

const navStore = new NavStore;
dispatcher.register(navStore.handleActions.bind(navStore));

export default navStore;