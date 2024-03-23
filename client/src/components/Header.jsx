import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-slate-200'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to="/">
            <h1 className='font-bold'>Scriven</h1>
            </Link>
           
            {/* menu */}
            <ul className='flex gap-4'>
                <Link to="/">
                <li className=''>Home</li>
                </Link>
                
                <Link to="/about">
                <li className=''>About</li>
                </Link>
                
                <Link to="/sign-in">
                <li className=''>Sign In</li>
                </Link>
                
            </ul>
        </div>
    </div>
  )
}

export default Header