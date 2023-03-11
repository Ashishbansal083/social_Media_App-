import React,{useState} from 'react'
import '../InfoCard/InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import Profilemodal from '../Profilemodel/Profilemodel';


const InfoCard = () => {
    const [modalOpened,setmodalOpened]=useState(false);
  return (
    <div className='InfoCard'>
        <div className='InfoHead'>
            <h4>Your Info</h4>
            <div>
            <UilPen width='2rem' height='1.2rem' 
            onClick={()=>setmodalOpened(true)}/>
            <Profilemodal 
            modalOpened={modalOpened}
            setmodalOpened={setmodalOpened}/>
            </div>
        </div>
        <div className='Info'>
            <span><b>Status </b></span>
            <span>In Relationship</span>
        </div>
        <div className='Info'>
            <span><b>Lives </b></span>
            <span>Multan</span>
        </div>
        <div className='Info'>
            <span><b>Works </b></span>
            <span>Zainskeepcods</span>
        </div>
        <button className='Button l-button'>Logout</button>
    </div>
  )
}

export default InfoCard