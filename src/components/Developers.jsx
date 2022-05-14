import React from 'react';
import terminal from '../Assets/terminal.png';



const Developers = () => {
  return (
    <div className='w-full text-white bg-black'>
        <div className='max-w-[1240px] px-4 py-16'>
            <div className='font-bold'>Superpower for DEFI developers.</div>
            <p>Checkout the <span className='blue'>documentation</span>, the <span className='blue'>quick start</span> or a guide below to integerate your project with thousands of token and billions of liquidity.</p>
        </div>
        <div className='flex justify-center w-full'>
            <img className='max-w-[250px] p-4 my-3 shadow-lg shadow-cyan-500/50' src={terminal} alt="" />
        </div>
    </div>
  )
}

export default Developers;