import React from 'react'
import avatar from './ava.png'


const About = () => {
  return (
    <div name='about' className='w-full bg-gray-300 p-6'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 lg:flex lg:flex-row-reverse items-center'>
            <img src={avatar} className='rounded-full mx-auto w-[300px] md:w-[400px] my-2'/>
            <div className='my-8 flex flex-col md:block items-center lg:text-right max-w-[500px] mx-auto'>
                <p className='text-red-700 font-bold text-3xl md:text-4xl border-b-2 border-red-700 inline'>About me</p>
                <h1 className='text-xl mb-3 font-semibold md:text-2xl mt-5'>Why I chose Front-end development?</h1>
                <p>Front-end development offers the perfect balance of creativity and logic. It allows me to build solutions that are both visually appealing and functional.</p>
                <a href="https://github.com/DrewChillguy" target='_blank'>
                <button className='bg-red-700 text-white w-[200px] my-5 py-3 rounded-md font-semibold hover:bg-red-800'>Github</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default About