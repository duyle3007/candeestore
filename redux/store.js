// This is traditionally way to write redux 
// createStore have been deprecated, redux official page have recommended to use Redux-toolkit for quick and easy way
// Below is just for for demonstration

import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from 'redux/reducers/index'

const enhancers = compose(
  (typeof window !== 'undefined' && window.devToolsExtension) ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, enhancers(applyMiddleware()))

export default store