import employee from '@src/api/employees.json';
import {EActionTypes, EmployeeActions, EmployeeReducer} from './employyesTypes';

const initialState: EmployeeReducer = {
  employees: employee,
  loading: false,
  error: null,
};
const employeesReducer = (
  action: EmployeeActions,
  state = initialState,
): EmployeeReducer => {
  switch (action.type) {
    case EActionTypes.ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case EActionTypes.UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: employee.map((e) =>
          e.id === action.payload.id
            ? {
                ...e,
                name: action.payload.name,
                role: action.payload.role,
                phone: action.payload.role,
                birthday: action.payload.birthday,
              }
            : e,
        ),
      };
    default:
      return state;
  }
};
export default employeesReducer;
