import styled from "styled-components";

const WelcomeWrapper = styled.section`
  background-color: red;
  margin-top: 4rem;

  div {
    width: 100%;
    height: 590px;
    background-image: radial-gradient(circle, rgba(0,0,0,0.5), rgba(2,2,2,.9) 100%) ,url(https://images.unsplash.com/photo-1485736231968-0c8ad5c9e174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .shopTitle {
    display: block;
    padding-top: 200px;
    text-align: center;
    color: white;
    font-size: 3rem;
  }

  .downBtn {
    cursor: pointer;
    border-radius: 50%;
    border: none;
    background: none;
    height: 50px;
    display: block;
    margin: 0 auto;
    margin-top: 200px;

    .downBtn__icon {
      width: 30px;
      height: 30px;
      color: #fff;
      transition: .3s ease-in-out;

      &:hover {
        color: #fc4747
      }
    }
  }
`

export default WelcomeWrapper