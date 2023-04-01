import Employee from '@src/types';

interface Filter {
  role: string;
  isArchive: boolean;
}

export interface EmployeeReducer {
  employees: Employee[];
  loading: boolean;
  error: boolean;
  filter: Filter;
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

export enum EFilterActionTypes {
  CHANGE_FILTER_ROLE = 'CHANGE_FILTER_ROLE',
  CHANGE_FILTER_ARCHIVE = 'CHANGE_FILTER_ARCHIVE',
}

interface IChangeFilterRole {
  type: EFilterActionTypes.CHANGE_FILTER_ROLE;
  payload: string;
}
interface IChangeFilterArchive {
  type: EFilterActionTypes.CHANGE_FILTER_ARCHIVE;
  payload: boolean;
}

export type EmployeeFilterAction = IChangeFilterArchive | IChangeFilterRole;
