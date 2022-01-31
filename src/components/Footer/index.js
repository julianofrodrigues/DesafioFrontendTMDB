import React from 'react';
import { FooterBase } from './styles';
import ImgFooter from '../../assets/img/Footer.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/julianofrodrigues">
      <img className="Logo" src={ImgFooter} alt="Dev" />
      </a>
      <p>
       Criado por
        {' '}
       Juliano Ferreira Rodrigues
      
      </p>
    </FooterBase>
  );
}

export default Footer;
