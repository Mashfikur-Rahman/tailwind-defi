import React from 'react';
import AboutCard from './AboutCard';
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';

const About = () => {
  return (
    <div className='bg-black text-white text-center'>
        <div className='max-w-[1240px] mx-auto px-4 py-16 '>
            <div>
                <h1 className='py-4'>A growing Protocol Ecosystem</h1>
                <p className='py-4 text-xl'>
                    The Defi Protocol system empowers developers, liquidity providers and traders to participate in a financial marketplace that is open and accessible to all.
                </p>
                {/* card container */}
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>

                {/* card */}
                    <AboutCard icon={<SiHiveBlockchain size={40}/>} heading='Reliable, temper-proof network' text=' Use decentralization, trused nodes, premium and cryptographic proofs to connect highly accurate and valualble data/APIs to any smart connect '/>

                    <AboutCard icon={<SiStrapi size={40} />} heading='Seamless connection to any API' text= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora praesentium aspernatur quae debitis' />
                    <AboutCard icon={<SiFsecure size={40}/>} heading='Proven, ready-made solutin' text= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora praesentium aspernatur quae debitis' />
                    <AboutCard icon={<VscServerProcess size={40} />} heading='Secure off-chain computation' text= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora praesentium aspernatur quae debitis' />

                </div>
            </div>
        </div>
    </div>
  )
}

export default About;