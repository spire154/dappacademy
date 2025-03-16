import React from 'react'
import {FaEnvelope} from 'react-icons/fa'
import {FaArrowRight} from 'react-icons/fa'


const FooterForm = () => {
  return (
    <form className="footer__col--form">
      <i> <FaEnvelope /> </i>
      <input type="email" placeholder='Enter your email' required />
      <button type="submit"><i> <FaArrowRight /> </i></button>
    </form>
  )
}

export default FooterForm