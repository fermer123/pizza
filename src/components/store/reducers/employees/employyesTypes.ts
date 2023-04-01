import Employee from '@src/types';

export interface EmployeeReducer {
  employees: Employee[];
  loading: false;
  error: false;
}

export enum EActionTypes {
  ADD_EMPLOYEE = 'ADD_EMPLOYEE',
  UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE',
}

interface AddEmployeeAction {
  type: EActionTypes.ADD_EMPLOYEE;
  payload: Employee;
}

interface UpdateEmployeeAction {
  type: EActionTypes.UPDATE_EMPLOYEE;
  payload: Employee;
}

export type EmployeeActions = AddEmployeeAction | UpdateEmployeeAction;
