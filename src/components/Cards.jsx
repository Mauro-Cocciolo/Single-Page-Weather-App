import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div className='cards'>
      {cities.map(c => <Card
          key={c.id}
          id={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
  );
}

/*
Le agrego la prop id... 
Ahora si, el id le va a llegar por props a Card

Ahora, cuando hace click en el titulo de la cartita, aparece la info detallada en la misma pagina donde está la cartita, abajo de la cartita, y yo quiero que aparezca en una ruta distinta, no en la misma pagina de las cards. Si me fijo en App veo que Cards no está ruteado y entonces aparece en todos los lugares.

VOY A App PARA RUTEAR A Cards
*/

