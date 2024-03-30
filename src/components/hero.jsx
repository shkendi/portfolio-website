// import React from 'react'
// import { BsLinkedin, BsGitHub } from 'react-icons/bs';
import Heropic from '../assets/heropic.jpg';

const hero = () => {
    return (
        <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
            <div className="w-1/3 ssm:w-fit">
                <p className="text-4xl mb-5 text-slate-300">I'm</p>
                <h1 className="text-6xl">Shkendi Naqellari</h1>
                <hr/>
                <p className='mt-10 text-slate-300 font-sans'>
                    I am a dedicated and enthusiastic Web Developer with a passion
						for problem-solving and creating innovative solutions.
                </p>
            </div>

            <div className='w-1/3 items-center ssm:w-fit'>
                <img src={Heropic} alt='' width={250} height={250} className='rounded-full w-full border-8 border-white' />
            </div>

            <div className='w-1/3 ssm:w-fit'>
                <p className='text-4xl mb-4'>About Me</p>
                <p className='text-slate-300'>I am committed to delivering high-quality work and continuously striving to improve
						my skills and knowledge to create software that meets the needs of end users.
                        </p>
                        <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>
                            Show More...
                        </button>
            </div>
        </section>
    )
}

export default hero