/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 */

enum ActionTypes {
  LOGIN = 'B4E/App/LOGIN',
  LOGIN_FAIL = 'B4E/App/LOGIN_FAIL',
  LOGIN_SUCCESS = 'B4E/App/LOGIN_SUCCESS',
  RESET_LOGIN = 'B4E/App/RESET_LOGIN',
}

export default ActionTypes;
