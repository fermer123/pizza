import Employee from '@src/types';

export interface EmployeeReducer {
  employees: Employee[];
  loading: boolean;
  error: boolean;
}

export enum EActionTypes {
  FETCH_ITEMS = 'FETCH_ITEMS',
  FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS',
  FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR',
  ADD_EMPLOYEE = 'ADD_EMPLOYEE',
  UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE',
}

interface IFetchItems {
  type: EActionTypes.FETCH_ITEMS;
}

interface IFetchItemsSuccess {
  type: EActionTypes.FETCH_ITEMS_SUCCESS;
  payload: Employee[];
}

interface IFetchItemsError {
  type: EActionTypes.FETCH_ITEMS_ERROR;
}

interface AddEmployeeAction {
  type: EActionTypes.ADD_EMPLOYEE;
  payload: Employee;
}

interface UpdateEmployeeAction {
  type: EActionTypes.UPDATE_EMPLOYEE;
  payload: Employee;
}

export type EmployeeActions =
  | AddEmployeeAction
  | UpdateEmployeeAction
  | IFetchItems
  | IFetchItemsSuccess
  | IFetchItemsError;
