import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class UserStore extends EventEmitter {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  getUsers() {
    return this.state.users
  }

  addUser(user) {
    console.log(user.name + '2')
    this.state.users.unshift(user)
  }

  handleActions(action) {
    switch(action.type) {
      case "ADD_USER": {
        this.addUser(action.user);
        break;
      }
    }
  }

}

const userStore = new UserStore;
dispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;