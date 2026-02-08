import { subjectsSlice } from './slice';

export const { setSubjects } = subjectsSlice.actions;
export const { selectSubjects } = subjectsSlice.selectors;

export default subjectsSlice;
