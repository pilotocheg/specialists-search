import { useRootSelector } from 'store/hooks';
import { selectSpecialists } from 'store/specialists';
import { SpecialistsListItem } from './item';
import { ListContainer } from './styles';

export function SpecialistsList() {
  const specialists = useRootSelector(selectSpecialists);

  return (
    <ListContainer>
      {specialists.map((specialist) => (
        <SpecialistsListItem key={specialist.userId} specialist={specialist} />
      ))}
    </ListContainer>
  );
}
