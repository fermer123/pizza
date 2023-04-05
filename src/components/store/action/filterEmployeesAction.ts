import {EActionTypes} from '../reducers/employyesTypes';

export const filterByRole = (role: string) => ({
  type: EActionTypes.CHANGE_FILTER_ROLE,
  payload: role,
});

export const filterByArchive = (arc: boolean) => ({
  type: EActionTypes.CHANGE_FILTER_ARCHIVE,
  payload: arc,
});

export const sortByName = (sort: boolean) => ({
  type: EActionTypes.SORT_BY_NAME,
  payload: sort,
});

export const sortByBirthday = (birthday: boolean) => ({
  type: EActionTypes.SORT_BY_NAME,
  payload: birthday,
});
