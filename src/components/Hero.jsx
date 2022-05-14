import React from 'react';
import heroVid from '../Assets/video.mp4';

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
        <video className='object-cover h-full w-full absolute -z-10' src={heroVid} autoPlay loop muted ></video>
        <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4'>
            <h1>Decentralized</h1>
            <h1 className='py-2'><span className='blue'>Trading</span> Protocol</h1>
            <p className='py-4 text-xl'>Guranteed liquidity trading millions of users and top Ethereum application</p>
            <div className='m-2 space-x-3 cursor-pointer'>
                <button>Use Defi</button>
                <button>FAQ</button>
            </div>
        </div>
        <div>
            <p className='text-center text-white text-2xl font-bold'>Total Volume Secured: $42, 104, 783, 662.47</p>
        </div>
    </div>
  )
}

export default Hero