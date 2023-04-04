import {Dispatch} from 'redux';
import {EActionTypes, EmployeeActions} from '../reducers/employyesTypes';

export const filterByRole =
  (role: string) => (dispatch: Dispatch<EmployeeActions>) => {
    try {
      dispatch({
        type: EActionTypes.CHANGE_FILTER_ROLE,
        payload: role,
      });
    } catch (error) {
      console.log(error);
    }
  };
export const filterByArchive =
  (arc: boolean) => (dispatch: Dispatch<EmployeeActions>) => {
    try {
      dispatch({
        type: EActionTypes.CHANGE_FILTER_ARCHIVE,
        payload: arc,
      });
    } catch (error) {
      console.log(error);
    }
  };
