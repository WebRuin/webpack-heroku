import dispatcher from "../dispatcher";

export function addUser(user) {
  dispatcher.dispatch({
    type: "ADD_USER",
    user
  });
}