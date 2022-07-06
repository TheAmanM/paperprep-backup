import React from 'react'
import './EmailCapture.css'

const EmailCapture = () => {
  return (
    <div className="email-capture">
      <div className='cta-text'>
        Excited for the first PaperPrep release?
      </div>
      <div className="capture">
        <input type="text" name="name" className='text' placeholder='Email'/>
        <button className='button'>Subscribe</button>
      </div>
    </div>
  )
}

export default EmailCapture