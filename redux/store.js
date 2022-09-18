import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from 'redux/reducers/index'

const enhancers = compose(
  (typeof window !== 'undefined' && window.devToolsExtension) ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, enhancers(applyMiddleware()))

export default store