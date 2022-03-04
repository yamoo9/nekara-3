import { SET_LIGHT, SET_DARK } from '../actions';
import { lightTheme, darkTheme } from './theme';

export default function themeReducer(state = lightTheme, action) {
  switch (action.type) {
    case SET_LIGHT:
      return {
        ...state,
        ...lightTheme,
      };
    case SET_DARK:
      return {
        ...state,
        ...darkTheme,
      };
    default:
      return state;
  }
}
