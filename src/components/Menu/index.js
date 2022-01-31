import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button';



function Menu() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const url = window.location.href.split('/');
    if(url[3] != "") {
      setShowButton(true)
    }
  })
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="D1 Smarkio Flix" />
      </Link>
      {
        showButton && <Button as={Link} className="ButtonLink" to="/">
          Voltar
        </Button>
      }
    </nav>
  );
}

export default Menu;