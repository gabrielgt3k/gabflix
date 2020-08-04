import styled from 'styled-components';

interface Props {
  color: string;
}

export const Categories = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    margin-bottom: 0;
  }
  ul {
    list-style: none;

    display: flex;
    flex-wrap: wrap;

    width: 100%;

    @media (max-width: 995px) {
      flex-direction: column;
      padding-left: 0;
    }
  }
`;

export const Category = styled.li`
  display: flex;
  flex: 0 0 30%;
  width: 30%;
  height: 197px;
  padding: 36px;
  margin-right: 28px;
  margin-top: 28px;
  overflow: hidden;
  background-color: ${({ color }: Props) => color};

  align-items: center;
  justify-content: center;

  border-radius: 6px;

  transition: opacity 0.5s;

  @media (max-width: 995px) {
    width: 100%;
  }

  &:hover {
    opacity: 0.7;
  }

  span {
    font-size: 1.5em;
    text-shadow: 1px 1px 2px #333;
    text-align: center;
  }
`;

export const BackHome = styled.button`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--primary);
  margin-bottom: 24px;
  margin-top: 24px;
`;
