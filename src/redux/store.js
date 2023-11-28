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

export const configureStore = () => {

  const sagaMiddleware = createSagaMiddleware()

  const allMiddleware = [thunk, sagaMiddleware]

  let store = createStore(persistedReducer, applyMiddleware(...allMiddleware));
  let persistor = persistStore(store)

  sagaMiddleware.run(rootSaga)

  return { store, persistor };
}

