import React from 'react'
import BlackButton from '../common/BlackButton'

const Weapons = () => {
    return (

        <div className='base_body flex items-center'>
            <div className='common_width flex w-[100%] h-[100%] items-center'>
                <div className='w-[50%]'>ANIMATION</div>
                <div className='w-[50%]'>
                    <div>
                        <div className='subtitle letter'>MERN</div>
                    </div>
                    <div className='flex gap-24'>
                        <div>
                        <div className='pt-10 pb-3 font-bold'>Database</div>
                        <ol>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                        </ol>
                        </div>

                        <div>
                        <div className='pt-10 pb-3 font-bold'>3D Tools</div>
                        <ol>
                            <li>Spline</li>
                            <li>React3Fiber</li>
                            <li>ReactDrei</li>
                        </ol>
                        </div>

                        <div>
                        <div className='pt-10 pb-3 font-bold'>Animation Libraries</div>
                        <ol>
                            <li>GSAP</li>
                            <li>FramerMotion</li>
                            <li>AOS.js</li>
                        </ol>
                        </div>
                    </div>
                    <div className='w-[fit-content] py-20'>
                        <BlackButton>Download Resume</BlackButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weapons