import type { Specialist } from 'api/types';

import {
  Container,
  ContentContainer,
  Image,
  ImageContainer,
  InfoText,
  LastOnlineText,
  Name,
  NameContainer,
  OnlineStatus,
} from './styles';
import {
  formatName,
  checkIsOnline,
  getSubjectAdditionalText,
  getLastOnlineText,
} from './helpers';
import { ListItemRating } from './components/rating';

type Props = {
  specialist: Specialist;
};

export function SpecialistsListItem(props: Props) {
  const {
    name,
    age,
    sex,
    photoUrl,
    onlineStatus,
    lastActivityTime,
    rating,
    defaultSubjectName,
    subjectsCount,
  } = props.specialist;

  const isOnline = checkIsOnline(onlineStatus);

  return (
    <Container>
      <ImageContainer>
        <ListItemRating rating={rating} />
        <Image src={photoUrl} alt={name} />
      </ImageContainer>
      <ContentContainer>
        <NameContainer>
          {isOnline && <OnlineStatus />}
          <Name>{formatName(name, age)}</Name>
        </NameContainer>
        <InfoText>
          {defaultSubjectName}
          {subjectsCount > 0 && (
            <span> {getSubjectAdditionalText(subjectsCount)}</span>
          )}
        </InfoText>
        {!isOnline && (
          <LastOnlineText>
            {getLastOnlineText(sex, lastActivityTime)}
          </LastOnlineText>
        )}
      </ContentContainer>
    </Container>
  );
}
