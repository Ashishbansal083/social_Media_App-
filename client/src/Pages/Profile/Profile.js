import React from 'react'
import Profileleft from '../../Components/Profileleft/Profileleft'
import '../Profile/Profile.css'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import PostSide from '../../Components/PostSide/PostSide'
import RightSide from '../../Components/RightSide/RightSide'

const Profile = () => {
  return (
    <div className='Profile'>
        <Profileleft/>
        <div className='Profile-center'>
          <ProfileCard/>
          <PostSide/>
        </div>
        <RightSide/>
         
    </div>
  )
}

export default Profile