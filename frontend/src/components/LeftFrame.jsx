import React from 'react'
import leftImage from '../assets/left-container.jpg'

const LeftFrame = () => {
  return (
    <div className="flex-none w-3/5 h-screen relative">
      <img src={leftImage} alt="Left container background" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Our Application
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Empowering doctors to provide better patient care. Streamline your workflow and access vital patient information effortlessly.
        </p>
      </div>
    </div>
  )
}

export default LeftFrame
          
          
