import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({});
// eslint-disable-next-line @typescript-eslint/naming-convention
export type rootReducerType = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
