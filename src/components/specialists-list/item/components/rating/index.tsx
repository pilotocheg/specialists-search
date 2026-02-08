import { getRating } from 'components/specialists-list/item/helpers';
import { Rating } from './styles';

type Props = {
  rating: number;
};

export function ListItemRating(props: Props) {
  const { rating } = props;

  const ratingText = getRating(rating);

  return (
    <Rating isNew={ratingText === 'New'}>
      Рейтинг
      <br />
      <span>{ratingText}</span>
    </Rating>
  );
}
