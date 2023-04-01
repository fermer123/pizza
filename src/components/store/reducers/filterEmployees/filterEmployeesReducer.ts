import {initialState} from '../employees/employeesReducer';
import {
  EFilterActionTypes,
  EmployeeFilterAction,
  EmployeeReducer,
} from '../employyesTypes';

const filterReducer = (
  state = initialState,
  action: EmployeeFilterAction,
): EmployeeReducer => {
  switch (action.type) {
    case EFilterActionTypes.CHANGE_FILTER_ROLE:
      return {
        ...state,
        employees: state.employees.filter((e) => e.role === action.payload),
      };
    case EFilterActionTypes.CHANGE_FILTER_ARCHIVE:
      return {
        ...state,
        employees: state.employees.filter(
          (e) => e.isArchive === action.payload,
        ),
      };
    default:
      return state;
  }
};
export default filterReducer;
