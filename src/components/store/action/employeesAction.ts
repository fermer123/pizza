import Employee from '@src/types';
import {Dispatch} from 'redux';
import {
  EActionTypes,
  EmployeeActions,
} from '../reducers/employees/employyesTypes';

const addEmployee =
  (newEmployee: Employee) => (dispatch: Dispatch<EmployeeActions>) => {
    try {
      dispatch({
        type: EActionTypes.ADD_EMPLOYEE,
        payload: newEmployee,
      });
    } catch (e) {
      console.log(e);
    }
  };
export default addEmployee;
