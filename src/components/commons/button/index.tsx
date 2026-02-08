import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { StyledButton } from './styles';

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  loading?: boolean;
};

export function Button(props: Props) {
  const { loading, disabled, ...btnProps } = props;
  return <StyledButton disabled={loading || disabled} {...btnProps} />;
}
