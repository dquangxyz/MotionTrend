import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'



function Footer() {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-text-contact'>Contact</div>
            <div className='footer-text-email'>motiontrend@test.com</div>
            <div className='footer-text-copyright'>@ Motiontrend. All rights reserved.</div>
            <div className='social-media'>
                <InstagramIcon />
                <FacebookIcon />
                <YouTubeIcon />     
            </div> 
        </div>
        <div className='footer-bottom'>
            <div className='footer-bottom-text'>Introduction</div>
            <div className='footer-bottom-text'>Term of Service</div>
            <div className='footer-bottom-text'>Language</div>
            <div className='footer-bottom-text'>Customer Service</div>
            <img className='black-logo-icon' src='/images/black-logo-icon.png' />
        </div>
    </div>
  )
}

export default Footer