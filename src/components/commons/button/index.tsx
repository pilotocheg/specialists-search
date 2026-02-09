import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { StyledButton } from './styles';
import { Loader } from '../loader';
import { theme } from 'styles/theme';

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  loading?: boolean;
};

export function Button(props: Props) {
  const { loading, disabled, children, ...btnProps } = props;
  return (
    <StyledButton disabled={loading || disabled} {...btnProps}>
      {loading ? (
        <Loader size={40} color={theme.colors.textPrimaryLight} />
      ) : (
        children
      )}
    </StyledButton>
  );
}
