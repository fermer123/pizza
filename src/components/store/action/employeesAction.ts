import Employee from '@src/types';
import {Dispatch} from 'redux';
import axios from '@src/api';
import {
  EActionTypes,
  EmployeeActions,
} from '../reducers/employees/employyesTypes';

export const fetchItems = () => async (dispatch: Dispatch<EmployeeActions>) => {
  try {
    dispatch({
      type: EActionTypes.FETCH_ITEMS,
    });
    const resp = await axios('/employees');
    dispatch({type: EActionTypes.FETCH_ITEMS_SUCCESS, payload: resp.data});
  } catch (e) {
    dispatch({type: EActionTypes.FETCH_ITEMS_ERROR});
  }
};

export const fetchItem = async (
  id: string | number,
  setData: (e: Employee) => void,
) => {
  const resp = await axios(`employees/${id}`);
  setData(await resp.data);
};

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
