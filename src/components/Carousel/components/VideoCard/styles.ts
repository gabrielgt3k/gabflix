import styled from 'styled-components';

interface VideoCardContainerProps {
  url: string;
}

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }: VideoCardContainerProps) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: all 0.3s;
  &:hover,
  &:focus {
    /* opacity: 0.5; */
    z-index: 101;
    transform: scale(1.2);
    border-color: #000 !important;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
