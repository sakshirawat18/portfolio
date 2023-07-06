import React from 'react'
import '../style/Contact.css'

const Contact = () => {
  return (
    <div className='Contact-Container'>
      <div className="Contact-left">
        <form className="form">
          <p className='touch'>GET IN TOUCH</p>
          <h1 className='title'>Contact</h1>
          <input className='input' placeholder="Name" />
          <input className='input' placeholder="E-mail" />
          <textarea className='textarea' placeholder="Write your message" rows={10}/>
          <button className='send-btn'>Send</button>
        </form>
      </div>


      <div className="Contact-right">
        {/* 3d model */}

      </div>
    </div>
  )
}

export default Contact