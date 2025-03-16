import React from 'react'

const date = new Date().getFullYear()


const Copyright = () => {
  return (
    <p className="footer__copyright">
        Dapp Academy © {date} - All Rights Reserved 
    </p>
  )
}

export default Copyright