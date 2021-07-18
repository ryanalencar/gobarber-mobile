import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'

import createStore from './createStore'
import rootReducer from './reducers'
import rootSaga from './sagas'
import persistReducers from './persistReducers'

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null
const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = createStore(persistReducers(rootReducer), middlewares)
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }
