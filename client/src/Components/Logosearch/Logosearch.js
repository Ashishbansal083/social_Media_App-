import React from 'react'
import logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import '../Logosearch/Logosearch.css'


const Logosearch = () => {
  return (
    <div className='LogoSearch'>
        <img src={logo} alt='logo img'/>
        <div className='search'>
            <input type='text' placeholder='#Explore'/>
            <div className='s-icon'>
                <UilSearch/>
            </div>
        </div>
        </div>
  )
}

export default Logosearch