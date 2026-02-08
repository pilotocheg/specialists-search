import { useEffect } from 'react';
import toast from 'react-hot-toast';

import { useAppDispatch, useRootSelector } from 'store/hooks';
import { getSubjects, selectSubjects } from 'store/subjects';

export function useSubjectsLoader() {
  const subjects = useRootSelector(selectSubjects);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSubjects())
      .unwrap()
      .catch(() => {
        toast.error('Не удалось загрузить список тем');
      });
  }, [dispatch]);

  return {
    subjects,
  };
}
