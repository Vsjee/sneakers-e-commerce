import styled from 'styled-components';

const ItemWrapper = styled.article`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 820px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default ItemWrapper;
