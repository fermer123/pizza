import {
  EActionTypes,
  EmployeeActions,
  EmployeeReducer,
} from '../employyesTypes';

export const initialState: EmployeeReducer = {
  employees: [],
  loading: false,
  error: null,
  isArchive: null,
  role: '',
  sortByName: null,
  sortByBirthDay: null,
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
        role: action.payload,
      };
    case EActionTypes.CHANGE_FILTER_ARCHIVE:
      return {
        ...state,
        isArchive: action.payload,
      };
    case EActionTypes.SORT_BY_NAME:
      return {
        ...state,
        employees: state.employees.sort((a, b) => {
          if (action.payload) {
            return a.name < b.name ? -1 : 1;
          }
          return b.name < a.name ? -1 : 1;
        }),
      };
    case EActionTypes.SORT_BY_BIRTHDAY:
      return {
        ...state,
        employees: state.employees.sort((a, b) => {
          const first = new Date(a.birthday.split('.').reverse().join('-'));
          const sec = new Date(b.birthday.split('.').reverse().join('-'));
          console.log(first);
          if (action.payload) {
            return first - sec;
          }
          return sec - first;
        }),
      };

    default:
      return state;
  }
};
export default employeesReducer;
