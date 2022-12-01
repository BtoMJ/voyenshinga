import React from 'react';
import logo from '../../assets/logo.png';
import logoBco from '../../assets/logo-bco.png';
import moto from '../../assets/moto.png';
import './LogisticaOnDemand.css'

export default function LogisticaOnDemand() {
  return (
    <div className='logistica-on-demand-container' id='logisticaOn'>

      <div className='logistica-on-demand-nav'>
        <a href='/'><img class="animate__animated animate__backInLeft" src={logo} alt='logotipo' /></a>
      </div>

      <div className='logistica-on-demand-content'>
        <div className='car'>
          <img src={moto} alt='moto' />
        </div>
        <div className='text'>
          <h1>LEÓN</h1>
          <p>Entregas en León Gto <strong>¡Solicita en el momento!</strong>
          </p>
        </div>
      </div>

      <div className='logistica-on-demand-ribbon-container'>
        <div className='logistica-on-demand-ribbon'>
          <h1>Logística On Demand</h1>
        </div>

      </div>

      <div className='logistica-on-demand-footer'>
        <a href='/'><img className="logo-xs animate__animated animate__backInRight" src={logoBco} alt='logotipo chico' /></a>
      </div>

    </div>
  )
}
