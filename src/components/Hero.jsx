import React from 'react'
import BlackButton from '../common/BlackButton'

const Hero = () => {
    return (
        <div className='base_body'>
            <div className='common_width pt-[5rem] flex items-start justify-between h-[80vh]'>
                <div className='w-[25rem]'>
                    <div className='title'>ME<span>R</span>N <br /> Developer</div>
                    <div className='py-10'>
                        <p>
                            Rohan, "The Code Assassin," is a top MERN stack developer, renowned for
                            user-centric web applications and innovative frontend expertise.
                        </p>
                    </div>
                    <div className='w-[fit-content]'>
                        <BlackButton>Download Resume</BlackButton>
                    </div>
                </div>
                <div className='w-[20rem] white_bg h-[85%]'></div>
                <div className='w-[25rem] flex items-start h-[80%]'>
                    <p className='w-[20rem] text-right'>Delivering precision, strategy, and top-tier solutions.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero