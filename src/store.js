import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sales from 'modules/sales/_store/reducer';
import salesSagas from 'modules/sales/_store/sagas';

const rootReducer = combineReducers({
  sales,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(salesSagas.fetchLeadsWatcher);

export default store;
