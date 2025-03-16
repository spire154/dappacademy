import React from 'react'
import './Hero.css'
import Button from '../Navbar/Button'

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Dapp Academy</span>
                <span className="heading-primary--sub">Empower Your Future with Decentralized Learning</span>
                <Button url="#" name="Learn More" />
            </h1>
        </div>
    </section>
  )
}

export default Hero