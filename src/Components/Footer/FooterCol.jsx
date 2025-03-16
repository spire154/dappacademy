import React from 'react'
import FooterForm from './FooterForm'
import SocialIcons from './SocialIcons'

const FooterCol_1 = (props) => {
  return (
    <div className='footer__col'>
        <p>{props.p1}</p>
    </div>
  )
}

export const FooterCol_2 = (props) => {
  return (
    <div className='footer__col'>
        <h3>{props.title}</h3>
        <p>{props.address1}</p>
        <p>{props.address2}</p>
        <p>{props.address3}</p>
        <p>{props.address4}</p>
        <p>{props.country}</p>
        <p className="footer__col--email">{props.email}</p>
        <p>{props.phone}</p>

    </div>
  )
}

export const FooterCol_3 = (props) => {
  return(
    <div className="footer__col">
      <h3>Newsletter</h3>
      <FooterForm />
      <SocialIcons />
    </div>
  )
}

export default FooterCol_1