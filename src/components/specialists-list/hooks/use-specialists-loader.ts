import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router';
import { useAppDispatch, useRootSelector } from 'store/hooks';
import {
  selectHasMore,
  selectLoading,
  selectSpecialists,
  getSpecialists,
} from 'store/specialists';
import {
  getParamsValue,
  searchParamsToSpecialistsParams,
} from 'helpers/search-params';
import { SEARCH_PAGE_SIZE } from 'constants/api';

export function useSpecialistsLoader() {
  const [searchParams, setSearchParams] = useSearchParams();
  const specialists = useRootSelector(selectSpecialists);
  const hasMore = useRootSelector(selectHasMore);
  const loading = useRootSelector(selectLoading);
  const dispatch = useAppDispatch();

  const handleLoadMore = () => {
    setSearchParams((params) => {
      const offset = getParamsValue(params, 'offset') ?? 0;
      params.set('offset', (offset + SEARCH_PAGE_SIZE).toString());
      return params;
    });
  };

  useEffect(() => {
    const params = searchParamsToSpecialistsParams(searchParams);

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
