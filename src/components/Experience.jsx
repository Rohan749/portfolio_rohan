import React from 'react'
import light from "../assets/images/light.png"
const Experience = () => {
    return (
        <div className='base_body flex items-center'>
            <div className=' flex w-[100%] h-[100%] items-center justify-between '>
                <div className='outline-dashed'>ANIMATION</div>
                <div className=' flex flex-col gap-4 w-[60%] items-end'>
                    <div className='custom_container w-[15rem] min-w-[fit-content] relative  mr-[20rem]'>
                        <div className='absolute top-2 right-2'>
                            <img src={light} alt='' />
                        </div>
                        <div className='subtitle'>BUILDORZ</div>
                        <div className='flex flex-col gap-2 font-bold w-[15rem] mt-3'>
                            <div className='flex gap-2'>
                            <div>Position:</div>
                            <div className='font-medium'>Full-stack dev</div>
                            </div>
                            <div className='flex gap-2'>
                            <div>Joined:</div>
                            <div className='font-medium'>Feb 2024 - Present</div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 font-bold w-[15rem] mt-8'>
                            <div className='flex gap-2'>
                            <div>Position:</div>
                            <div className='font-medium'>Frontend dev</div>
                            </div>
                            <div className='flex gap-2'>
                            <div>Joined:</div>
                            <div className='font-medium'>Oct 2023 - Jan 2024</div>
                            </div>
                        </div>
                    </div>

                    <div className='custom_container w-[15rem] min-w-[fit-content]'>
                        <div className='subtitle'>TECUDIA</div>
                        <div className='flex flex-col gap-2 font-bold w-[15rem] mt-3'>
                            <div className='flex gap-2'>
                            <div>Position:</div>
                            <div className='font-medium'>Frontend dev</div>
                            </div>
                            <div className='flex gap-2'>
                            <div>Joined:</div>
                            <div className='font-medium'>May 2023 - Sep 2023</div>
                            </div>
                        </div>
                    </div>

                    <div className='custom_container w-[15rem] mr-[20rem] min-w-[fit-content]'>
                        <div className='subtitle'>FREELANCE</div>
                        <div className='flex flex-col gap-2 font-bold w-[15rem] mt-3'>
                            <div className='flex gap-2'>
                            <div>Position:</div>
                            <div className='font-medium'>Designer + Dev</div>
                            </div>
                            <div className='flex gap-2'>
                            <div>Joined:</div>
                            <div className='font-medium'>Aug 2021 - Feb 2023</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience