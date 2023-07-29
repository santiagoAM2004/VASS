import React from 'react'

function LiFooter(props) {
  return (
    <li className='mt-[3px]'>
      <a className='hover:underline decoration-solid text-white transition-all duration-300 ease-in text-[14px] ' href="#">{props.name}</a>
    </li>
  )
}

export default LiFooter
