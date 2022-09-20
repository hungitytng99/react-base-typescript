/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 */

enum ActionTypes {
  CHECK_VALID_TOKEN = 'B4E/App/CHECK_VALID_TOKEN',
  CHECK_VALID_TOKEN_FAIL = 'B4E/App/CHECK_VALID_TOKEN_FAIL',
  CHECK_VALID_TOKEN_SUCCESS = 'B4E/App/CHECK_VALID_TOKEN_SUCCESS',
  RESET_CHECK_VALID_TOKEN = 'B4E/App/RESET_CHECK_VALID_TOKEN',
}

export default ActionTypes;
