import { specialistsSlice } from './slice';

export { getSpecialists } from './thunks';

export const {
  selectSpecialists,
  selectTotalCount,
  selectHasMore,
  selectLoading,
} = specialistsSlice.selectors;

export default specialistsSlice;
