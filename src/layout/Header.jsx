import React from 'react'
import BlackButton from '../common/BlackButton'
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Header = () => {
  return (
    <div className='fixed w-[100%] z-50 top-0 h-[100%]'>
    <div className=' flex items-center px-[19rem] py-6 justify-between'>
        <div className='subtitle'>
            ROHAN PANDEY
        </div>
        <div className='flex items-center gap-16'>
            <div>
                <FaTwitter />
            </div>
            <div>
                <FaLinkedin />
            </div>
            <div>
                <FaGithub />
            </div>
            <div>
                <FaInstagram />
            </div>
            <BlackButton>Learn more</BlackButton>
        </div>
        <div className='absolute bottom-12 right-16 text-[14px]'>
            <div className='flex flex-col gap-5 text-right'>
                <div>Home</div>
                <div>Profile</div>
                <div>Weapons</div>
                <div>Experience</div>
                <div>Projects</div>
                <div>Achievements</div>
                <div>Feedback</div>
                <div>Skillset</div>
                <div>Credits</div>
            </div>
        </div>
    </div>
    </div>
  )
}
