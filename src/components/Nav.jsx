import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

import {Link} from "react-router-dom";

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
         Weather App
        </span>
      </Link>
      <Link to='/about'>
        <span className='about'>About this project</span>
      </Link>
      <SearchBar
        onSearch={onSearch}
      />
    </nav>
  );
};

export default Nav;

/*
Esto venía hecho, solamente tengo que importar el componente About y hacer el Link, para eso antes importo el componente Link.
El Link va a envolver al componente About, porque yo quiero que ademas de lo que traía hasta ahora la Navbar (el logo, el titulo, la barra de busqueda), ahora tenga tambien un link con el texto About y que cuando toquemos ahí nos lleve al localhost:3000/about (clickeo la palabrita About y me lleva ahí). 
Cuando yo abro la aplicacion, me aparece automaticamente en la home, en localhost:3000, y aunque no la ponen, esa es la home, sería la ruta / --> cuando clickeo en About nos va a llevar a localhost:3000/about

Ya que stoy en el Nav, envuelvo en un Link todo el span de Nav para que esté donde esté, si toco ahí me lleva a home, a /.

CREO Y VOY A CONSTRUIR About.jsx 
*/


