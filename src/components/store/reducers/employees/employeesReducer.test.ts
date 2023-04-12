import {screen} from '@testing-library/react';
import * as FilterEmployees from '../../action/filterEmployeesAction';
import {EmployeeActions, EmployeeReducer} from '../employyesTypes';
import employeesReducer from './employeesReducer';

describe('employeesReducer', () => {
  let state: EmployeeReducer = {
    employees: [
      {
        id: 1,
        name: 'Илья Емельянов',
        isArchive: false,
        role: 'driver',
        phone: '+7 (883) 508-3269',
        birthday: '12.02.1982',
      },
      {
        id: 2,
        name: 'Александр Ларионов',
        isArchive: true,
        role: 'waiter',
        phone: '+7 (823) 440-3602',
        birthday: '26.01.1986',
      },
      {
        id: 3,
        name: 'Богдан Давыдов',
        isArchive: false,
        role: 'driver',
        phone: '+7 (971) 575-2645',
        birthday: '29.11.1990',
      },
      {
        id: 4,
        name: 'Олимпиада Макарова',
        isArchive: true,
        role: 'waiter',
        phone: '+7 (945) 447-2286',
        birthday: '06.01.1987',
      },
    ],
    loading: false,
    error: null,
    isArchive: null,
    role: '',
    sortByName: null,
    sortByBirthDay: null,
  };
  beforeEach(() => {
    state = {
      employees: [
        {
          id: 1,
          name: 'Илья Емельянов',
          isArchive: false,
          role: 'driver',
          phone: '+7 (883) 508-3269',
          birthday: '12.02.1982',
        },
        {
          id: 2,
          name: 'Александр Ларионов',
          isArchive: true,
          role: 'waiter',
          phone: '+7 (823) 440-3602',
          birthday: '26.01.1986',
        },
        {
          id: 3,
          name: 'Богдан Давыдов',
          isArchive: false,
          role: 'driver',
          phone: '+7 (971) 575-2645',
          birthday: '29.11.1990',
        },
        {
          id: 4,
          name: 'Олимпиада Макарова',
          isArchive: true,
          role: 'waiter',
          phone: '+7 (945) 447-2286',
          birthday: '06.01.1987',
        },
      ],
      loading: false,
      error: null,
      isArchive: null,
      role: '',
      sortByName: null,
      sortByBirthDay: null,
    };
  });
  test('switch role', () => {
    const newState = employeesReducer(
      state,
      FilterEmployees.filterByRole('driver') as EmployeeActions,
    );
    const linkElement = newState.role;
    expect(linkElement).toBe('driver');
    expect(newState.employees).not.toContain('waiter');
    console.log(newState);
    expect(newState.employees).toEqual([
      {
        id: 1,
        name: 'Илья Емельянов',
        isArchive: false,
        role: 'driver',
        phone: '+7 (883) 508-3269',
        birthday: '12.02.1982',
      },
      {
        id: 3,
        name: 'Богдан Давыдов',
        isArchive: false,
        role: 'driver',
        phone: '+7 (971) 575-2645',
        birthday: '29.11.1990',
      },
    ]);
  });
  test('isArchive', () => {
    const newState = employeesReducer(
      state,
      FilterEmployees.filterByArchive(true) as EmployeeActions,
    );
    const linkElement = newState.isArchive;
    expect(linkElement).toBeTruthy();
  });
});
