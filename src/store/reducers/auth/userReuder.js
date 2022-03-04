import { LOGIN, LOGOUT } from '../../actions/types';

const initialUser = null;

export default function userReducer(state = initialUser, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    default:
    case LOGOUT:
      return initialUser;
  }
}
