import React, {useState} from 'react'

import {close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  // Toggler
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <nav className='w-full flex py-6 justify-between items-center navbar'>

        <img src={logo} alt='hoobang' className='w-[124px] h-[32px]'/>

        {/* Desktop Navbar */}
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          
          {navLinks.map((nav, index) =>(
            <li key={nav.id}
              className={`font-poppins text-white font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? `mr-0` : 'mr-10'}`}>

                <a href={`#${nav.id}`} className={``}> 
                  {nav.title} 
                </a>

              </li>
          ))}

        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img 
              src={toggle ? close : menu} 
              alt='toggler'
              classname='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setToggle((prev) => !prev)}
              />

              <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                  
                  <ul className='list-none flex justify-end items-center flex-1 flex-col'>
                    {navLinks.map((nav, index) =>(
                      <li key={nav.id}
                        className={`font-poppins text-white font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? `mr-0` : 'mb-4'}`}>

                          <a href={`#${nav.id}`} 
                          className={``}> 
                            {nav.title} 
                          </a>

                        </li>

                    ))}
                  </ul>

              </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
