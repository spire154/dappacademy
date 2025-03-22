import React from 'react'
import Button from '../Navbar/Button'
import StarRating from './StarRating'


const Card = (props) => {
  return (
    <div className="card">
        <div>
           <img loading="lazy" src={props.img} alt="" />
        </div>
        <div className="bottom">
            <div className="name">
                <p>{props.name}</p>
            </div>
            <div className="author">
                {props.author}
            </div>
            <div className="price">
                {props.price}
            </div>
            <StarRating rating = {props.rating} />
        </div>
        <div className='card__button'>
            <Button url="#" name="Preview" />
        </div>
    </div>
  )
}

export default Card
