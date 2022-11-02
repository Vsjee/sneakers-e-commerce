import styled from "styled-components";

const FooterWrapper = styled.footer`
  @keyframes background-pan {
    from {
      background-position: 0% center;
    }

    to {
      background-position: -200% center;
    }
  }

  text-align: center;
  margin-top: auto;
  padding: 1rem;
  background-color: #fc4747;

  h1 > .magic {
    animation: background-pan 4s linear infinite;
    background: linear-gradient(
      90deg, #000, #fff, #000, #fff, #000
    );
    background-size: 200%;
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;
  }

  .accounts {
    ul {
      display: flex;
      justify-content: center;
      gap: 1rem;
      padding: 1rem;
      list-style: none;

      li a .icon {
        color: #000;
        width: 30px;
        height: 30px;
        transition: .5s ease-in-out;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  .madeby {
    font-size: .7rem;

    p > span {
      font-weight: bold;
    }
  }
`

export default FooterWrapper