import React from 'react'
import bgImage from '../assets/left-container.jpg'
import SignUpForm from '../components/SignUpForm'

const SingUp = () => {
  return (
    
    <div 
      className='w-full relative bg-no-repeat bg-cover h-screen overflow-hidden' 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center ">
        <SignUpForm/>
      </div>
    </div>
  )
}

export default SingUp