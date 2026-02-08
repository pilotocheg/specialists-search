import { EmptyState } from 'components/empty-state';
import { Loader } from 'components/commons/loader';

import { SpecialistsListItem } from './item';
import { ListContainer, LoadMoreButton, NoResultsContainer } from './styles';
import { useSpecialistsLoader } from './hooks';

export function SpecialistsList() {
  const { handleLoadMore, hasMore, loading, specialists } =
    useSpecialistsLoader();

  const isEmpty = !specialists.length;

  if (loading && isEmpty) {
    return (
      <NoResultsContainer>
        <Loader />
      </NoResultsContainer>
    );
  }

  if (isEmpty) {
    return (
      <NoResultsContainer>
        <EmptyState description="К сожалению, нет анкет с такими параметрами" />
      </NoResultsContainer>
    );
  }

  return (
    <>
      <ListContainer>
        {specialists.map((specialist) => (
          <SpecialistsListItem
            key={specialist.userId}
            specialist={specialist}
          />
        ))}
      </ListContainer>
      {hasMore && (
        <LoadMoreButton
          loading={loading}
          type="button"
          onClick={handleLoadMore}
        >
          Показать еще
        </LoadMoreButton>
      )}
    </>
  );
}
