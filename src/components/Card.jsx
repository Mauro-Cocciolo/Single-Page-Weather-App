import React from 'react';
import './Card.css';

import {Link} from "react-router-dom";


export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
          <Link to={`/ciudad/${id}`}>
          <h5 className="card-title">{name}</h5>
          </Link>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

/*
Importo Link.
Linkeo el titulo de la cartita. Cuando toque el titulo, cuando hagan click ahí, vos mandalos a que ruta? bueno, la ruta va a tener que cambiar de forma dinámica segun la cartita, no va a ser una ruta especifica como / o /about que siempre es igual, sino que vamos a necesitar que cambie segun el id de la ciudad, por eso la hacemos dinamica. Le decimos:  Link to={}  mandalo a la ruta   `/ciudad/${id}`   barra ciudad barra y el id que te pasen, el id que te llegue acá por props  Card ({min, max, name, img, onClose, id}).
Ahí convertimos nuestro título en un link, ahora necesitamos ir a contruir nuestro componente Ciudad para que lo muestre en esta ruta y además rutearlo en App. 

VOY A CONSTRUIR EL COMPONENTE Ciudad
*/


