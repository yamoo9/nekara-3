import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './slices';

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  // preloadedState: {
  //   theme: {},
  //   auth: {
  //     user: null,
  //     permission: '',
  //   },
  //   cart: [],
  //   comments: [],
  // },
});

export const StoreProvider = (props) => <Provider store={store} {...props} />;
