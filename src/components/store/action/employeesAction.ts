import Employee from '@src/types';
import {Dispatch} from 'redux';
import axios from '@src/api';
import {EActionTypes, EmployeeActions} from '../reducers/employyesTypes';

export const fetchItems = () => async (dispatch: Dispatch<EmployeeActions>) => {
  try {
    dispatch({
      type: EActionTypes.FETCH_ITEMS,
    });
    const resp = await axios.get<Employee[]>('/employees');
    dispatch({type: EActionTypes.FETCH_ITEMS_SUCCESS, payload: resp.data});
  } catch (e) {
    dispatch({type: EActionTypes.FETCH_ITEMS_ERROR});
  }
};

export const fetchItem = async (
  id: string | number,
  setData: (e: Employee) => void,
) => {
  const resp = await axios.get<Employee>(`employees/${id}`);
  setData(resp.data);
};

export const addEmployee =
  (newEmployee: Employee) => async (dispatch: Dispatch<EmployeeActions>) => {
    try {
      await axios.post('/employees', {
        ...newEmployee,
      });
      dispatch({
        type: EActionTypes.ADD_EMPLOYEE,
        payload: newEmployee,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const editEmployee =
  (newEmployee: Employee) => async (dispatch: Dispatch<EmployeeActions>) => {
    try {
      await axios.patch(`employees/${newEmployee.id}`, {...newEmployee});
      dispatch({
        type: EActionTypes.UPDATE_EMPLOYEE,
        payload: newEmployee,
      });
    } catch (error) {
      console.log(error);
    }
  };
