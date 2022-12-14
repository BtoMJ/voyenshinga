import React from 'react';

import logo from '../../assets/logo.png';
import moto from '../../assets/moto.png';
import van from '../../assets/van.png';
import repartidor from '../../assets/repartidor.png';
import helicoptero from '../../assets/heli.png';
import scooter from '../../assets/scooter.png';
import camioneta from '../../assets/camioneta.png';

import './Home.css';

setTimeout(showIn, 550);
setTimeout(changeClass, 1000);

function showIn() {
  
  document.getElementById("scooter").style.display = "block";
  document.getElementById("scooter").className = "animate__animated animate__backInRight";

  document.getElementById("camioneta").style.display = "block";
  document.getElementById("camioneta").className = "animate__animated animate__backInRight";
  
  document.getElementById("helicoptero").style.display = "block";
  document.getElementById("helicoptero").className = "animate__animated animate__backInRight";
  
}

function changeClass() {
  document.getElementById("card-camioneta").className = "card";
  document.getElementById("card-scooter").className = "card";
  document.getElementById("card-heli").className = "card";
}


// const container = document.getElementById("content-container");

//   container.addEventListener("wheel", function (e) {
//     if (e.deltaY > 0) {
//       container.scrollLeft += 100;
//       e.preventDefault();
//     }
//     else {
//       container.scrollLeft -= 100;
//       e.preventDefault();
//     }
//   });

export default function Home() {
  return (
    <div className='home-container'>

      <div className='nav-container'>
        <div className='logo-container'>
          <img className="animate__animated animate__backInLeft" src={logo} alt='logotipo' />
        </div>
      </div>

      <div id='content-container' className='content-container'>

        <div className='card animate__animated animate__backInUp' id='card-camioneta'>
          <div className='icon'>
           <img src={camioneta} id="camioneta" alt='icono-camioneta'/>
          </div>
          <div className='data-container'>
            <div className='title'>
              <h2>Log??stica <br/>Ligera</h2>
            </div>
            <div className='image'>
              <img className='camioneta' src={van} alt='camioneta' />
            </div>
          </div>
          <div className='sub-title'>
            <p>
              Entregas PROGRAMADAS <br/>en CDMX y Le??n Gto.<br/>
              <strong>??El mismo d??a!</strong>
            </p>
            <a href="#logistica">+ info</a>
          </div>
        </div>

        <div className='card animate__animated animate__backInUp' id='card-scooter'>
          <div className='icon'>
           <img src={scooter} id="scooter" alt='icono-scooter' />
          </div>
          <div className='data-container'>
            <div className='title'>
              <h2>Log??stica <br/>On Demand</h2>
            </div>
            <div className='image'>
              <img className='moto' src={moto} alt='camioneta' />
            </div>
          </div>
          <div className='sub-title'>
            <p>
              Entregas en Le??n Gto.<br/>
              r??pido y sencillo.<br/> 
              <strong>??Solicita en el momento!</strong>
            </p>
            <a href="#logisticaOn">+ info</a>
          </div>
        </div>

        <div className='card animate__animated animate__backInUp' id='card-heli'>
          <div className='icon'>
           <img src={helicoptero} id="helicoptero" alt='icono-helicoptero' />
          </div>
          <div className='data-container'>
            <div className='title'>
              <h2>Log??stica <br/>Same Day</h2>
            </div>
            <div className='image'>
              <img className='repartidor' src={repartidor} alt='camioneta' />
            </div>
          </div>
          <div className='sub-title'>
            <p>
              Entregas CDMX y Le??n Gto.<br/>
              sin contratiempos.<br/>
              <strong>??El mismo d??a!</strong>
            </p>
            <a href="#logisticaSame">+ info</a>
          </div>
        </div>

      </div>
    </div>
  )
}
