import React from 'react'
import BlackButton from '../common/BlackButton'
import light from "../assets/images/light.png"

const Profile = () => {
    return (
        <div className='base_body flex items-center'>
            <div className='common_width flex w-[100%] h-[85%] justify-between'>

                <div className=''>
                    <div className='subheader pb-10'>
                        Rohan Kumar Pandey
                    </div>
                    <div className='custom_container shadow-lg relative'>
                        <div className='absolute top-2 right-2'>
                            <img src={light} alt='' />
                        </div>
                        <div className='flex gap-11'>
                            <div className='flex flex-col gap-3 font-bold w-[10rem]'>
                                <div>Position:</div>
                                <div>Speciality:</div>
                                <div>Rank:</div>
                                <div>Service Number:</div>
                            </div>
                            <div className='flex flex-col gap-3 font-normal'>
                                <div>MERN-Stack Developer</div>
                                <div>Frontend Operations</div>
                                <div>Elite Developer</div>
                                <div>E-1095D</div>
                            </div>
                        </div>

                        <div className='flex gap-11 pt-16'>
                            <div className='flex flex-col gap-2 font-bold w-[10rem]'>
                                <div>Physical Condition:</div>
                                <div>Age:</div>
                                <div>Height:</div>
                                <div>Weight:</div>
                            </div>
                            <div className='flex flex-col gap-2 font-normal'>
                                <div>Peak</div>
                                <div>23</div>
                                <div>5'8</div>
                                <div>148lbs</div>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <div className='pt-10'>
                                <BlackButton>Download Resume</BlackButton>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between mt-[3rem]'>
                        <div>
                            <div className='subheader'>60+</div>
                            <p className='desc mt-[-14px]'>Projects</p>
                        </div>
                        <div>
                            <div className='subheader'>03+</div>
                            <p className='desc mt-[-14px]'>Yrs of Exp</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='subheader'>4K+</div>
                            <p className='desc mt-[-14px]'>Engagements</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile