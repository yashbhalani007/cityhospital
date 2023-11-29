import { createStore, applyMiddleware } from "redux"
import { rootReducer } from "./reducer"
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga/rootSaga"

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['medicines', 'cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const allMiddleware = [thunk, sagaMiddleware]

export const configureStore = () => {

  let store = createStore(persistedReducer, applyMiddleware(...allMiddleware));
  
  sagaMiddleware.run(rootSaga)

  return store;
}

export let store = configureStore()

export let persistor = persistStore(store)