import styled from 'styled-components';

const CardWrapper = styled.article`
  position: relative;
  overflow: hidden;

  ul {
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 1rem;
    padding: 0 5px 0 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 20px;
  }

  .name {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
  }

  .price {
    font-size: 1.3rem;
    position: absolute;
    top: 40px;
    left: 250px;
  }

  .sizes {
    position: absolute;
    right: 40px;

    select {
      color: #000;
      background-color: #fff;
    }
  }

  .info {
    color: black;
    width: 90%;
    text-align: start;
  }

  .buy__button {
    margin-top: 1rem;
  }
`;

export default CardWrapper;
