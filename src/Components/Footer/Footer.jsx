import React from 'react'
import './Footer.css'
import Copyright from './Copyright'
import FooterCol_1 from './FooterCol'
import { FooterCol_2 } from './FooterCol'
import { FooterCol_3 } from './FooterCol'
import { main_column } from '../../Variables/Footer/Footer'
import { info_column } from '../../Variables/Footer/Footer'

const Footer = () => {
  return (
    <footer>
        <div className="footer__row">
            <FooterCol_1
                p1={main_column.p1}
                p2={main_column.p2}
                p3={main_column.p3}
            />
            <FooterCol_2
                title={info_column.title}
                address1={info_column.address1}
                address2={info_column.address2}
                address3={info_column.address3}
                address4={info_column.address4}
                country={info_column.country}
                email={info_column.email}
                phone={info_column.phone}
            />
            <FooterCol_3 />
        </div>
        <hr/>
        <Copyright />
    </footer>
  )
}

export default Footer