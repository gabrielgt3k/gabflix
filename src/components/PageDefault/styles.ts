import styled, { css } from 'styled-components';

interface Props {
  removePadding?: boolean;
}

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  ${({ removePadding }: Props) =>
    removePadding &&
    css`
      padding: 0;
    `}
`;
