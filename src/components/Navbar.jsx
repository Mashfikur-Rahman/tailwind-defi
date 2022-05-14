import React, {useState} from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
    const [icon, setIcon] = useState(false);
    const handleIcon = () => {
        setIcon(!icon);
    };

  return (
    <div className='w-full h-[80px] bg-black'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
            <div>
                <h1 className='text-[#00d8ff]'>DEFI</h1>
            </div>

            {/* Desktop Menu */}
            <div className='hidden md:flex '>
                <ul className='flex text-white items-center'>
                    <li>Platform</li>
                    <li>Developer</li>
                    <li>Community</li>
                    <li>About</li>
                <button className='ml-4'>User Defi</button>
                </ul>
            </div>

            {/* Hamburger menu */}
            <div onClick={handleIcon} className='block md:hidden'>
                {
                    icon ? <AiOutlineMenu size={30} className='text-white'/> : <AiOutlineClose size={30} className='text-white'/>
                }
            </div>

            {/* mobile menu */}
            <div className={icon ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>
                <ul>
                    <li className='text-2xl'>Platform</li>
                    <li className='text-2xl'>Developer</li>
                    <li className='text-2xl'>Community</li>
                    <li className='text-2xl'>About</li>
                    <button className='m-8'>User Defi</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar;