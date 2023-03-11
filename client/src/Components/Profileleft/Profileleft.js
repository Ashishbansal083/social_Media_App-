import React from 'react'
import Logosearch from '../Logosearch/Logosearch'
import '../Profileleft/Profileleft.css'
import InfoCard from '../InfoCard/InfoCard'
import FollowersCard from '../FollowersCard/FollowersCard'

const Profileleft = () => {
  return (
    <div className='Profileleft'>
        <Logosearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default Profileleft