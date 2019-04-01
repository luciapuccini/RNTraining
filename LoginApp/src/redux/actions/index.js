import { CHANGE_EMAIL, CHANGE_FIRST_NAME, CHANGE_LAST_NAME } from '../types';

const changeEmail = (value) => ({
  type: CHANGE_EMAIL,
  payload: value
});


export const setValue = (value, name) => (dispatch) => {
  switch (name) {
    case 'email':
      dispatch(changeEmail(value));
      break;
    default:
      break;
  }
}
  ;
