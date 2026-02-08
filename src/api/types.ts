export type Subject = {
  id: number;
  name: string;
  sequence: number;
};

/**
 * 1 = M, 2 = F
 */
export type Sex = 1 | 2;

export type Specialist = {
  userId: string;
  name: string;
  sex: Sex;
  age: number;
  birthDate: string;
  photoUrl: string;
  rating: number; // 0 = "New"
  defaultSubjectId: number;
  defaultSubjectName: string;
  subjectsCount: number;
  profSpeciality: 1 | 2 | 3; // 1 = Консультант, 2 = Сексолог, 3 = Коуч
  level: 0 | 1; // 0 = базовый, 1 = премиум
  onlineStatus: 1 | 2; // 1 = offline, 2 = online
  lastActivityTime: string;
};

export type GetSpecialistsParams = {
  level?: number;
  sex?: number;
  subjectId?: number;
  profSpeciality?: number;
  ratingFrom?: number;
  ratingTo?: number;
  ageFrom?: number;
  ageTo?: number;
  limit: number;
  offset: number;
};

export type SubjectsResponse = {
  data: Subject[];
};

export type SpecialistsResponseData = {
  items: Specialist[];
  totalCount: number;
};

export type SpecialistsResponse = {
  data: SpecialistsResponseData;
};
