import React from 'react'
import Card from './Card'
import cards from '../../Variables/Course/Cards'
import './Course.css'

function createCard(card) {
  return(
    <Card 
      key={card.id}
      img={card.img}
      name={card.name}
      author={card.author}
      price={card.price}
      rating={card.rating}
    />
  )
}

const Course = () => {
  return (
    <section className="section-courses">
      <h1 className='course-heading'>Courses</h1>
      <div className="courses">
        {cards.map(createCard)}
      </div>
    </section>
  )
}

export default Course