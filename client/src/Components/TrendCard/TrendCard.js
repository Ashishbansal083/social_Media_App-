import React from 'react'
import '../TrendCard/TrendCard.css'
import { TrendData } from '../../Data/TrendData'

const TrendCard = () => {
  return (
    <div className='TrendCard'>
         <h3>Trends for yours</h3>
        {TrendData.map((data,id)=>{
            return(
                <div className='Trenddata'>
                <span>#{data.name}</span>
                <span>{data.shares}k Shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard