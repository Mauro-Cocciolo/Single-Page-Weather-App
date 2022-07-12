import React from "react";
import "./Ciudad.css";

export default function Ciudad({city}) {
    return (
        <div className="ciudad">
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}
/*
Ciudad ya lo tenemos hecho en el readme, lo pego acá. Veo que me pasan una prop city. De este objeto city que me mandan, de esta ciudad, extrae el name para mostrarlo en un h2 a modo de titulo. Despues, en un monton de div, extrae de city temp, weather, wind, clouds, etc. Cada div muestra una de estas infos. Lo muestra todo en forma de una listita con divs. Esta es la información mas especifica que quiero mostrar de la ciudad en particular que me pasan. 
Bien, ya está construido el comonente, ahora donde se va a mostrar este componente? bueno, tengo que ir a hacer el ruteo. En el readme me daban un ejemplo de como se va a ver la ruta:
http://localhost:3000/ciudad/3435910
donde el que va a ir cambiando es este id, 3435910, de forma dinamica.

VOY A App A HACER EL RUTEO
*/

