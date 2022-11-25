import FooterWrapper from './FooterWrapper.css';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <FooterWrapper>
      <h1>
        Sneak <span className="magic">Shop</span>
      </h1>
      <article className="accounts">
        <ul>
          <li>
            <a href="https://github.com/Vsjee" target="_blank">
              <AiFillGithub className="icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/david-felipe-hernandez-547109205/" target="_blank">
              <AiFillLinkedin className="icon" />
            </a>
          </li>
        </ul>
      </article>
      <article className="madeby">
        <p>
          Made by <span>David Felipe Hernandez</span>.
        </p>
        <p>All reserved rigths © 2022.</p>
      </article>
    </FooterWrapper>
  );
};

export default Footer;
