import type { Sex } from 'api/types';
import { StyledImage } from './styles';

import noPhotoManImg from 'images/no_photo_man.svg';
import noPhotoWomanImg from 'images/no_photo_woman.svg';
import noPhotoImg from 'images/no_photo.svg';

function getNoPhotoImg(sex: Sex) {
  switch (sex) {
    case 1:
      return noPhotoManImg;
    case 2:
      return noPhotoWomanImg;
    default:
      return noPhotoImg;
  }
}

type Props = {
  src?: string;
  alt: string;
  sex: Sex;
};

export function ListItemImage({ src, alt, sex }: Props) {
  const noPhotoImg = getNoPhotoImg(sex);
  return <StyledImage src={src ?? noPhotoImg} alt={alt} />;
}
