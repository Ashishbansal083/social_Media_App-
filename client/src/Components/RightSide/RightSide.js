import React, {useState} from 'react'
import '../RightSide/RightSide.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import Sharemodal from '../Sharemodal/Sharemodal'

const RightSide = () => {
  const [modalOpened,setmodalOpened]=useState(false);

  return (
    <div className='RightSide'>
        <div className='Navicons'>
            <img src={Home} alt=''/>
            <UilSetting/>
            <img src={Noti} alt=''/>
            <img src={Comment} alt=''/>
            
        </div>
        <TrendCard/>
        <button className='Button r-button' 
        onClick={()=>setmodalOpened(true)}>
          Share</button>
          <Sharemodal 
            modalOpened={modalOpened}
            setmodalOpened={setmodalOpened}/>
    </div>
  )
}

export default RightSide