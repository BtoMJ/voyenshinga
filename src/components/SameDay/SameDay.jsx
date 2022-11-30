import React from 'react';
import logo from '../../assets/logo.png';
import logoBco from '../../assets/logo-bco.png';
import repartidor from '../../assets/repartidor.png';
import './SameDay.css';

export default function SameDay() {
  return (
    <div className='same-day-container' id='logisticaSame'>

      <div className='same-day-nav'>
        <a href='/'><img class="animate__animated animate__backInLeft" src={logo} alt='logotipo' /></a>
      </div>

      <div className='same-day-content'>
        <div className='car'>
          <img className='animate__animated animate__backInLeft' src={repartidor} alt='camioneta' />
        </div>
        <div className='text'>
          <h1>LEÓN - CDMX</h1>
          <p>Entregas en CDMX y León Gto <strong>¡El mismo día!</strong>
          </p>
        </div>
      </div>

      <div className='same-day-ribbon-container'>
        <div className='same-day-ribbon'>
          <h1>Same Day</h1>
        </div>

      </div>

      <div className='same-day-footer'>
        <a href='/'><img className="logo-xs animate__animated animate__backInRight" src={logoBco} alt='logotipo chico' /></a>
      </div>

    </div>
  )
}
