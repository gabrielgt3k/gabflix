import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 18px;
    letter-spacing: 2px;
  }

  img {
    animation: ${rotate} 2s linear infinite;
    border-radius: 50%;
    border: 2px solid var(--white);

    & + img {
      margin-left: 14px;
    }
  }
`;
