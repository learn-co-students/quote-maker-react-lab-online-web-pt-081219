import { createStore } from 'redux'
import rootReducer from './reducers/index'

export function configureStore(){
  return createStore(
    rootReducer
    // , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // i put this in index.js as it wasn't making the dev tools appear from here
  );
}

export const store = configureStore()