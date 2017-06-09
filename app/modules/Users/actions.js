import UserConstants from './constants';

export const changeSorting = sorting => ({
  type: UserConstants.CHANGE_SORTING,
  payload: sorting
});
