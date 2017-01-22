import dispatcher from "../dispatcher";

export function login() {
  dispatcher.dispatch({
    type: "LOGIN"
  });
}

export function logout() {
  dispatcher.dispatch({
    type: "LOGOUT"
  });
}

export function toogleAccountMenu() {
  dispatcher.dispatch({
    type: "TOOGLE_ACCOUNT_MENU"
  });
}

export function toogleLoginMenu() {
  dispatcher.dispatch({
    type: "TOOGLE_LOGIN_MENU"
  });
}