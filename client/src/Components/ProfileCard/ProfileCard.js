import React from 'react'
import cover from '../../img/cover.jpg'
import profile from '../../img/profileImg.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
    const Profilepage=true;

  return (
    <div className='ProfileCard'>
        <div className='ProfileImages'>
            <img src={cover} alt='coverimg'/>
            <img src={profile} alt='profileimg'/>
        </div>
        <div className='ProfileName'>
            <span>Zendaya MJ</span>
            <span>senior UI Designer</span>
        </div>
        <div className='followStatus'>
            <hr/>
            <div>
            <div className='follow'>
                <span>6890</span>
                <span>followings</span>
            </div>
            <div className='vl'/>
            <div className='follow'>
                <span>1</span>
                <span>follower</span>
            </div>
            {Profilepage && (
                <>
                <div className='vl'>
                    
                </div>
                <div className='Follow'>
                    <span>3</span>
                    <span>Posts</span>
                </div>
                </>
            )}
            </div>            
            <hr/>
        </div>
        { Profilepage ? "" : <span>
            My Profile
        </span> }
        
    </div>
  )
}

export default ProfileCard