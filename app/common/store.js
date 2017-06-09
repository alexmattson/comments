import { createStore } from 'redux';
import RootReducer from './rootReducer';
import merge from 'lodash/merge';

const configureStore = (inputs) => {
  return (createStore(RootReducer));
};

export default configureStore;
