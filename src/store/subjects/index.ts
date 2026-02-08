import { subjectsSlice } from './slice';

export { getSubjects } from './thunks';
export const { selectSubjects } = subjectsSlice.selectors;

export default subjectsSlice;
