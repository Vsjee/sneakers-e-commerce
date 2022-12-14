import styled from 'styled-components';

const CheckoutItemsCardWrapper = styled.article`
  .itemContainer {
    display: flex;
    position: relative;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 10%;
    border-bottom: 1px solid black;
  }

  .itemContainer__counter {
    position: absolute;
    left: 10px;
    top: 10px;
  }

  .itemContainer__list {
    padding: 1rem;
    list-style: none;
    width: 270px;
  }

  .itemContainer__btn {
    position: relative;
    right: 40px;
    bottom: 70px;
    width: 25px;
    height: 25px;
    padding: 0;
    background: none;

    .itemContainer__btn--icon {
      width: 25px;
      height: 25px;
      color: #000;
      transition: 0.4s ease-in-out;

      &:hover {
        color: #fc4747;
      }
    }
  }

  @media screen and (max-width: 493px) {
    .itemContainer {
      flex-direction: column;

      img {
        width: 170px;
      }

      .itemContainer__list {
        width: 75%;
        display: block;
        margin: 0 auto;
      }

      .itemContainer__btn {
        bottom: 320px;
        left: 130px;
      }
    }
  }
`;

export default CheckoutItemsCardWrapper;
