export type FilterFormValues = {
  sex: string;
  ageFrom: string;
  ageTo: string;
  subjectId: string;
  profSpeciality: string;
  rating: string;
};

export const defaultValues: FilterFormValues = {
  sex: '',
  ageFrom: '',
  ageTo: '',
  subjectId: '',
  profSpeciality: '',
  rating: '',
};
