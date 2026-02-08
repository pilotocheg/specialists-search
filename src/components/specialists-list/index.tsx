import { useRootSelector } from 'store/hooks';
import { selectSpecialists } from 'store/specialists';

export function SpecialistsList() {
  const specialists = useRootSelector(selectSpecialists);

  return (
    <div>
      {specialists.map((specialist) => (
        <div key={specialist.userId}>
          <img src={specialist.photoUrl} alt={specialist.name} />
          <h3>{specialist.name}</h3>
          <p>{specialist.sex}</p>
        </div>
      ))}
    </div>
  );
}
