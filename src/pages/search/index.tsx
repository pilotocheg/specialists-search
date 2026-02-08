import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { fetchSpecialists } from 'api';
import { Filters } from 'components/filters';
import { SpecialistsList } from 'components/specialists-list';
import { useAppDispatch } from 'store/hooks';
import { setSpecialists } from 'store/specialists';
import { getSearchParams } from './helpers';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchSpecialists({
      limit: 12,
      offset: 0,
      ...getSearchParams(searchParams),
    }).then((response) => {
      dispatch(setSpecialists(response));
    });
  }, []);

  return (
    <div>
      <Filters />
      <SpecialistsList />
    </div>
  );
}
