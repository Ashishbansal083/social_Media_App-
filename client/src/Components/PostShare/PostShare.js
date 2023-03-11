import React,{useState,useRef} from 'react'
import './PostShare.css'
import profileimg from '../../img/profileImg.jpg'
import {UilScenery,UilPlayCircle,UilTimes,UilLocationPoint,UilSchedule} from '@iconscout/react-unicons'

const PostShare = () => {
    const [image,setimage]=useState(null)
    const imageRef=useRef()

    const onImageChange=(event)=>{
        if(event.target.files && event.target.files[0])
        {let img=event.target.files[0];
        setimage({
            image:URL.createObjectURL(img),
        });
        }
    };
  return (
    <div className='PostShare'>
        <img src={profileimg} alt="profileimg" />
        <div>
            <input 
            type='text' 
            placeholder="What's happening"/>
          <div className='PostOption'>
            <div className='Option'
            style={{color: 'var(--photo)'}}
            onClick={()=>imageRef.current.click()}
            > 
                <UilScenery/>
                Photo
            </div>
            <div className='Option'
            style={{color: 'var(--video)'}}>
                <UilPlayCircle/>
                Video
            </div>
            <div className='Option'
            style={{color: 'var(--location)'}}>
                <UilLocationPoint/>
                Location
            </div>
            <div className='Option'
            style={{color: 'var(--shedule)'}}>
                <UilSchedule/>
                Schedule
            </div>
            <button className='Button ps-button'>
                Share
            </button>
            <div style={{display:'none'}}>
                <input type='file' name='myimage' ref={imageRef} onChange={onImageChange}/>
            </div>
            </div>
            {image &&
            <div className='previewImage'>
                <UilTimes onClick={()=>setimage(null)}/>
                <img src={image.image} alt='notavailable'/>
            </div>

            }
        </div>        
    </div>
  )
}

export default PostShare