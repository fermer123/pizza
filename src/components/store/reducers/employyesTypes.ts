import Employee from '@src/types';

export interface EmployeeReducer {
  employees: Employee[];
  loading: boolean;
  error: boolean;
  isArchive: boolean | null;
  role: string;
}

export enum EActionTypes {
  FETCH_ITEMS = 'FETCH_ITEMS',
  FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS',
  FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR',
  ADD_EMPLOYEE = 'ADD_EMPLOYEE',
  UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE',
  CHANGE_FILTER_ROLE = 'CHANGE_FILTER_ROLE',
  CHANGE_FILTER_ARCHIVE = 'CHANGE_FILTER_ARCHIVE',
  SORT_BY_NAME = 'SORT_BY_NAME',
  SORT_BY_BIRTHDAY = 'SORT_BY_BIRTHDAY',
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

interface IChangeFilterRole {
  type: EActionTypes.CHANGE_FILTER_ROLE;
  payload: string;
}
interface IChangeFilterArchive {
  type: EActionTypes.CHANGE_FILTER_ARCHIVE;
  payload: boolean;
}

interface ISortByName {
  type: EActionTypes.SORT_BY_NAME;
  payload: boolean;
}

interface ISortByBirthday {
  type: EActionTypes.SORT_BY_BIRTHDAY;
  payload: boolean;
}

export type EmployeeActions =
  | AddEmployeeAction
  | UpdateEmployeeAction
  | IFetchItems
  | IFetchItemsSuccess
  | IFetchItemsError
  | IChangeFilterArchive
  | IChangeFilterRole
  | ISortByName
  | ISortByBirthday;
