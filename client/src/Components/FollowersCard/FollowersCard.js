import React from 'react'
import '../FollowersCard/FollowersCard.css'
import { Followers } from '../../Data/FollowersData'

const FollowersCard = () => {
  return (
    <div className='FollowerCard'>
        <h3>Who is Following you</h3>
        {Followers.map((Follower,id)=>{
            return(
                <div className='Follower'>
                    <div >
                        <img src={Follower.img} alt=''
                        className='FollowerImg' />
                        <div className='FollowerName'>
                            <span>{Follower.name}</span>
                            <span>{Follower.username}</span>
                        </div>
                    </div>
                    <button className='Button fc-button'>
                        Folw
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard