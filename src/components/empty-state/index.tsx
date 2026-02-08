import emptySearchIcon from '../../images/empty_search_icon.svg';

import { Container, Icon, Description } from './styles';

type Props = {
  description: string;
};

export function EmptyState(props: Props) {
  const { description } = props;

  return (
    <Container>
      <Icon src={emptySearchIcon} alt="" />
      <Description>{description}</Description>
    </Container>
  );
}
