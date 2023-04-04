import * as Employees from '../action/employeesAction';
import * as FilterEmployees from '../action/filterEmployeesAction';

export default {
  ...Employees,
  ...FilterEmployees,
};
