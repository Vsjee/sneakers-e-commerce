import styled from 'styled-components';

const CartCardWrapper = styled.article`
  margin: 40px 10px;

  .item__info,
  .item__logic {
    display: flex;
  }

  .item__info {
    justify-content: space-between;
    ul {
      list-style: none;
      margin-left: 20px;
    }
  }

  .item__logic {
    justify-content: space-around;
  }
`;

export default CartCardWrapper;
