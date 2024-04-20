import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../images/CarGO.png'

export default function Header() {
  const navigate = useNavigate();
    

  return (
    <div > 
      <header className='flex justify-between items-center px-3 mx-auto  bg-white border-b shadow-sm sticky top-0 z-40'>
        <div className='flex '>
          <img src={logo} 
          alt="logo" 
          className='h-10 cursor-pointer rounded-full' 
          onClick={()=>navigate("/") }></img>
          <p className='text-2xl pl-2 pt-1 font-serif '>CarGo</p>
        </div>
        <div>
          <ul className='flex space-x-10'>
            <li className={`cursor-pointer text-sm py-3 font-semibold text-black border-b-[3px] border-b-transparent`} 
            onClick={()=>
            navigate("/")}>Home</li>
            <li className={`cursor-pointer text-sm py-3 font-semibold text-black border-b-[3px] border-b-transparent`} 
            onClick={()=>
            navigate("/product")} >Product</li>
            <li className={`cursor-pointer text-sm py-3 font-semibold  text-black border-b-[3px] border-b-transparent`} 
            onClick={()=>
            navigate("/about")} >About</li>
            <li className={`cursor-pointer text-sm py-3 font-semibold  text-black border-b-[3px] border-b-transparent`} 
            onClick={()=>
            navigate("/review")} >Review</li>
            
          </ul>
        </div>
      </header>
    </div>
  )
}
