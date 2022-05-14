import React from 'react';

const Subscriber = () => {
  return (
    <div className='w-full px-4 py-16 bg-black text-white text-center'>
    <h1>Join Our DEFI Community</h1>
    <div className='space-x-2 m-2'>
        <input className='rounded-full p-1' type="email" placeholder='Enter your email'/>
        <button className='blue' type='text'>Sign Up</button>
    </div>

    <div className='flex items-center py-2 space-x-1 justify-center'>
        <input type="checkbox"/>
        <p>Yes! i agree to received email communication from DeFI </p>
    </div>

    </div>
  )
}

export default Subscriber;