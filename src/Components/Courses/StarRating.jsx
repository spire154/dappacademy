import React from 'react'
import { FaStar } from 'react-icons/fa'


function StarRating({rating}) {
  const stars = [];
  for (let i = 1; i<=5; i++){
    stars.push(
      <FaStar key={i} style={{color: i <= rating ? 'orange' : 'gray',}} />
    )
  }
  return <div>{stars}</div>
}

export default StarRating