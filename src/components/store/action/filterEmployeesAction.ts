import {EActionTypes} from '../reducers/employyesTypes';

export const filterByRole = (role: string) => ({
  type: EActionTypes.CHANGE_FILTER_ROLE,
  payload: role,
});

export const filterByArchive = (arc: boolean) => ({
  type: EActionTypes.CHANGE_FILTER_ARCHIVE,
  payload: arc,
});
