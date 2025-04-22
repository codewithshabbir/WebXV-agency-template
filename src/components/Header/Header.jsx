import React from 'react'

const Header = () => {
  return (
    <header className='flex bg-brand-primary border-brand-border justify-between px-20 py-6 border-2'>
        <img src="/public/logo.png" alt="" />
        <nav className='flex items-center'>
            <ul className='text-white text-sm flex gap-4.5'>
                <li>Web XV</li>
                <li>All Projects</li>
                <li>Community</li>
                <li>About us</li>
            </ul>
        </nav>
        <button className='bg-brand-blue text-white px-4 py-2 rounded-md uppercase text-sm font-semibold'>Register</button>
    </header>
  )
}

export default Header