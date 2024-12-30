import React from 'react'

const Button = ({text, href}) => {
  return (
    <a href={href} className='px-4 sm:px-6 py-2 rounded-full text-blue-500 border-2 border-blue-500 font-semibold hover:bg-blue-500 hover:text-black transition hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.8)]'>{text}</a>
    
  )
}

export default Button;