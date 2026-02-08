import { StyledImage } from './styles';

type Props = {
  src: string;
  alt: string;
};

export function ListItemImage({ src, alt }: Props) {
  return <StyledImage src={src} alt={alt} />;
}
