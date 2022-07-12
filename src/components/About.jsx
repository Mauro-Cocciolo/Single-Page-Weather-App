import React from "react";
import "./About.css";

export default function About() {
    return(
        <div className="about"> 
        <h1 className="h1">
            <h1>
                La presente Weather App es una SPA creada a lo largo de la cursada del modulo M2 del Bootcamp de Henry.
                Conocimientos aplicados: modules, bundlers, React-styles-states-routing, React-Redux, muchos dolores de cabeza pero mayor voluntad y dedicación.
                Espero les agrade!
            </h1>

            <h1>
                This Weather App is a SPA created throughout the course of the M2 module of Henry's Bootcamp.
                Applied knowledge: modules, bundlers, React-styles-states-routing, React-Redux, many headaches but more will and dedication.
                I hope you like it!
            </h1>
        </h1>
        </div>
    )
}

/*
Lo creo desde cero. Le pongo lo que quiero en el h1.
Puedo exportarlo así o si no hago solamente function About(){} y abajo de todo pongo export default About; es lo mismo.

AHORA VAMOS A MODIFICAR App PARA IR RUTEANDO ESTO Y PODER VER LOS CAMBIOS.
*/

