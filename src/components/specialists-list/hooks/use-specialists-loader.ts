import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router';
import { PAGE_SIZE, searchParamsToApiParams } from 'pages/search/helpers';
import { useAppDispatch, useRootSelector } from 'store/hooks';
import {
  selectHasMore,
  selectLoading,
  selectSpecialists,
  getSpecialists,
} from 'store/specialists';

export function useSpecialistsLoader() {
  const [searchParams, setSearchParams] = useSearchParams();
  const specialists = useRootSelector(selectSpecialists);
  const hasMore = useRootSelector(selectHasMore);
  const loading = useRootSelector(selectLoading);
  const dispatch = useAppDispatch();

  const handleLoadMore = () => {
    setSearchParams((prev) => {
      prev.set('offset', (Number(prev.get('offset')) + PAGE_SIZE).toString());
      return prev;
    });
  };

  useEffect(() => {
    const params = searchParamsToApiParams(searchParams);

    dispatch(getSpecialists(params))
      .unwrap()
      .catch(() => {
        toast.error('Не удалось загрузить специалистов');
      });
  }, [searchParams, dispatch]);

  return {
    handleLoadMore,
    hasMore,
    loading,
    specialists,
  };
}
