import {Dispatch} from 'redux';
import {
  EFilterActionTypes,
  EmployeeFilterAction,
} from '../reducers/employyesTypes';

export const filterByRole =
  (role: string) => (dispatch: Dispatch<EmployeeFilterAction>) => {
    try {
      dispatch({
        type: EFilterActionTypes.CHANGE_FILTER_ROLE,
        payload: role,
      });
    } catch (error) {
      console.log(error);
    }
  };
export const filterByArchive =
  (arc: boolean) => (dispatch: Dispatch<EmployeeFilterAction>) => {
    try {
      dispatch({
        type: EFilterActionTypes.CHANGE_FILTER_ARCHIVE,
        payload: arc,
      });
    } catch (error) {
      console.log(error);
    }
  };
