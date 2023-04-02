import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import employeesReducer from './reducers/employees/employeesReducer';
import filterReducer from './reducers/filterEmployees/filterEmployeesReducer';

const rootReducer = combineReducers({
  employees: employeesReducer,
  filter: filterReducer,
});
// eslint-disable-next-line @typescript-eslint/naming-convention
export type rootReducerType = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
