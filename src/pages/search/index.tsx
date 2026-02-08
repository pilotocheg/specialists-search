import { Filters } from 'components/filters';
import { SpecialistsList } from 'components/specialists-list';
import { PageContainer } from './styles';

export default function SearchPage() {
  return (
    <PageContainer>
      <Filters />
      <SpecialistsList />
    </PageContainer>
  );
}
