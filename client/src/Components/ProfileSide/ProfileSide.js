import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import Logosearch from '../Logosearch/Logosearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSide.css'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <Logosearch/>
      <ProfileCard/>
      <FollowersCard/>
    </div>  
  )
}

export default ProfileSide