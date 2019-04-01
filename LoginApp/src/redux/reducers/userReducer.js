import { CHANGE_EMAIL, CHANGE_FIRST_NAME, CHANGE_LAST_NAME } from '../types';

const INITIAL_STATE = {
  email: '',
  firstName: '',
  lastName: ''
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    default:
      return INITIAL_STATE;
  }
};
export default userReducer;
