import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FaYoutubeSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

const SocialIcons = () => {
  return (
    <div className="footer__col--social-icons">
        <i> <FaFacebookF /> </i>
        <i> <FaYoutubeSquare /> </i>
        <i> <FaInstagramSquare /> </i>
        <i> <FaTwitterSquare /> </i>
    </div>
  )
}

export default SocialIcons