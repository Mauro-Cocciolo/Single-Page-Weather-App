import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';

import { Route } from "react-router";
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad.jsx';

const apiKey = process.env.REACT_APP_APIKEY;

function App() {

  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <div className="App">
      <Route
        path='/'
        render={() => <Nav onSearch={onSearch} />}
      />
      <div>
        <Route
          path='/about'
          exact
          component={About}
        />
        <Route
          exact
          path="/"
          render={() => <Cards cities={cities} onClose={onClose} />}
        />
        <Route
          path='/ciudad/:ciudadId'
          render={({ match }) => <Ciudad city={onFilter(match.params.ciudadId)} />} />
      </div>
    
    </div>
  );
}

export default App;

/*
Fijate que arriba tiene que estar importado el Route (puede que lo haga automatico el vsc con las cosas que hice hasta ahora, por las dudas fijate, a Wanda se le cre?? solo)
Empezamos a rutear dentro del return. Envuelvo Nav en el compomente Route. La ruta va a ser barra, /, o sea que cuando yo est?? en / quiero que se renderice, qu ese muestre el componente Nav. Como lo hago? con la propiedad render, que es la que uso cuando al componente que quiero renderizar le tengo que pasar props (el onSearch); la prop render recibe por default, aunque no se vea, el metodo match, location y history, los recibe en esos parentesis: render={(ac??) =>. Adentro le pongo en componente Nav as?? como estaba, con las props que recib??a (onSearch={onSearch}). As?? renderizamos este componente en /. O sea, le digo: "vos renderizate donde est?? barra, no importa lo que siga atr??s, vos mostrate en todos lados"

Abajo de Nav, hago lo mismo con el About. Queremos que renderice el componente About solamente en la ruta /about, por eso le agrego el exact. Y ac??, como no le ten??a que pasar props como antes, uso directamente la propiedad component y le paso el componente que quiero que muestre, el About.
component={About}
No olvidarse de importar arriba el componente About.

NOW. La idea es que ahora, cuando yo clickee sobre una cartita me lleve a otra ruta, a /ciudad/y el id de esa ciudad, para poder ver informaci??n mas detallada sobre eso; entonces tendr??amos que ponerle un Link al t??tulo, par que cuando lo toquemos nos lleve a esa otra ruta para ver todo esa info detallada. 
VOY A Card A HACER EL LINK EN EL TITULO DE LA CARTITA.

VUELVO AC?? DESDE EL FUTURO PARA HACER EL RUTEO DE Ciudad.
Primero importo Ciudad.
Voy a utilizar este path: path='/ciudad/:ciudadId' --> cuando vemos dos puntitos y un nombre cualquiera, arbitrario, el que queramos, como ac??, esto es un par??metro; es como los argumentos en las funciones, en este lugar :ciudadId viene otra cosa a representar el id de una ciudad. 
Voy a utilizar de nuevo render porque tengo que transmitir propiedades (city). Ademas, haciendo ()=> automaticamente paso las propiedades match, location y history, pero ac?? hago un destructuring para traerme solo match. Hasta ac?? vamos:
<Route
    exact
    path='/ciudad/:ciudadId'
    render={({match}) => <Ciudad city={...} />}
/>
y que toma como valor lo que me llega en  city={ac??} ? Bueno, en la App tenemos definida una funcion onFilterque recibe como argumento un id de ciudad, onFilter(ciudadId). Y que es lo que nosotros necesitamos hacer? nosotros necesitamos ejecutar esta funci??n de filtrado ac?? adentro: city={ac??} --> llamamos a la funcion onFilter y la ejecuto, la invoco: 
city={onFilter()}  ??y que le pasa como argumento? Si yo se que esta funcion onFilter recibe como parametro un id de ciudad, onFilter(ciudadId), ??como extraigo yo el id de ciudad de mi url? Bien, eso lo sacamos a traves de la prop match: 
match.params.ciudadId   : si yo acced??a match-a su prop params-y de ah?? extraigo segun el nombre que le hayamos puesto ac?? como argumento, /ciudad/:ciudadId', el valor que toma esto, y se lo paso a la funcion:
onFilter(match.params.ciudadId) , bueno, as?? yo estoy invocando esta funcion pasandole finalmente un id de ciudad, que es justamente lo que necesida como argumento onFilter. Y que retorna esta funcion? 
function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  } 
Filtra el estado cities de App (su estado interno, que era un array en el que poniamos todas las ciudades que se iban mapeando en el componente Cards) y lo filtra segun id --> si el id de las ciudades (c) que va recorriendo del array cities es igual al que me stan pasando como argumento, (ciudadId), entonces guardate esa ciudad en la variable ciudad (let ciudad) porque sabemos que es esa la que estamos buscando, de la que estamos queriendo leer la informaci??n. Ahora, la variable ciudad es un arreglo donde el filter guard?? el resultado del filtro que aplic?? (es decir, o le agreg?? la c que buscabamos o no agreg?? nada porque no hab??a coincidencias). Si ese arreglo tiene length, o sea que filter le pas?? el elemento que buscabamos, retorn?? ese elemento, esa ciudad que qued?? guardada en la variable. Si no, si el length es 0, no entres al if y retorn?? null. 
Ahora, esa ciudad que nos retorna, es esa ciudad que nosotros le estamos pasando a Ciudad como prop: Ciudad city={...} 

AHORA VOY A Cards PORQUE LOS TURROS NO LE AGREGARON UNA PROP id Y ROMPE TODO PORQUE TIRA UNDEFINED. VOY A Cards

VUELVO AC?? DESDE EL FUTURO PARA HACER EL RUTEO DE Cards.
Cards, nos dec??a el readme, tiene que aparecer solo en la ruta /, por eso uso exact.
Como lleva props, uso el metodo render.
*/

