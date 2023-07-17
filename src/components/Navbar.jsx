import React, { useState } from 'react';
import {vlogo,lock, hamburgerMenu, close} from '../assets'

const Navbar = () => {

    const [toggle,setToggle]=useState(false)
    const handleClick = ()=> setToggle(!toggle)

  return (
    <div className='w-full h-[80px] bg-gray-300 border-b'>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
            
            <img src={vlogo} className="h-[80px] w-[100px]"/>
            
            <div className='hidden md:flex items-center '>
                <ul className='flex gap-4'>
                <a href={`/`}>Home</a>
                <a href={`/About/`}>About</a>
                <a href={`/support/`}>Support</a>
                <a href={`/platform/`}>Platform</a>
                <a href={`/pricing/`}>Pricing</a>
                </ul>
            </div>


            <div className='hidden md:flex'>
                <form className='flex justify-between items-center  bg-transparent  px-6 gap-2'>
                    <input
                    id="q"
                    aria-label="Search contacts"
                    placeholder="Search"
                    type="search"
                    name="q"
                    />
                    <div
                        id="search-spinner"
                        aria-hidden
                        hidden={true}
                        />
                    <div
                    className="sr-only"
                    aria-live="polite"
                    ></div>
                </form>
                <form method="post">
                    <button className=' px-8 py-3 rounded-md bg-[#367DE8] text-white font-bold'>Sign In</button>
                </form>
            </div>

            <div className='md:hidden'  onClick={handleClick}>
                    <img src={toggle?close:hamburgerMenu} />
            </div>




        </div>

        <div className={toggle?'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b':'hidden'}>
            <ul>
                    <a href="/" className="p-4 hover:bg-gray-100">Home</a>
                    <li className='p-4 hover:bg-gray-100'>About</li>
                    <li className='p-4 hover:bg-gray-100'>Support</li>
                    <li className='p-4 hover:bg-gray-100'>Platform</li>
                    <li className='p-4 hover:bg-gray-100'>Pricing</li>
                    <div className='flex flex-col my-4 gap-4'>
                    <form className='flex justify-between items-center  bg-transparent  px-6 gap-2'>
                                <input
                                id="q"
                                aria-label="Search contacts"
                                placeholder="Search"
                                type="search"
                                name="q"
                                />
                                <div
                                    id="search-spinner"
                                    aria-hidden
                                    hidden={true}
                                    />
                                <div
                                className="sr-only"
                                aria-live="polite"
                                ></div>
                            </form>
                            <form method="post">
                            <button className='px-8 py-3 rounded-md bg-[#367DE8] text-white font-bold'>Sign In</button>
                            </form>
                    </div>
            </ul>
        </div>
        
        
    </div>
  )
}

export default Navbar