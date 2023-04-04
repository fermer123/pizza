import {
  EActionTypes,
  EmployeeActions,
  EmployeeReducer,
} from '../employyesTypes';

export const initialState: EmployeeReducer = {
  employees: [],
  loading: false,
  error: null,
};
const employeesReducer = (
  state = initialState,
  action: EmployeeActions,
): EmployeeReducer => {
  switch (action.type) {
    case EActionTypes.FETCH_ITEMS:
      return {...state, loading: true};
    case EActionTypes.FETCH_ITEMS_SUCCESS:
      return {...state, loading: false, employees: action.payload};
    case EActionTypes.FETCH_ITEMS_ERROR:
      return {...state, loading: false, error: true};
    case EActionTypes.ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case EActionTypes.UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((e) =>
          e.id === action.payload.id
            ? {
                ...e,
                name: action.payload.name,
                role: action.payload.role,
                phone: action.payload.phone,
                birthday: action.payload.birthday,
                isArchive: action.payload.isArchive,
              }
            : e,
        ),
      };
    case EActionTypes.CHANGE_FILTER_ROLE:
      return {
        ...state,
        employees: state.employees.filter((e) =>
          e.role.includes(action.payload),
        ),
      };
    case EActionTypes.CHANGE_FILTER_ARCHIVE:
      return {
        ...state,
        employees: state.employees.filter(
          (e) => e.isArchive !== action.payload,
        ),
      };

    default:
      return state;
  }
};
export default employeesReducer;
