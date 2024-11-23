import React from 'react'
import pp from "../assets/chitrakshchavanpp.jpg"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { HERO_CONTENT } from '../constants'

function Herosection() {

    const [text ] = useTypewriter({
        words: ['MERN Developer','Canva Designer'],
        loop: true,
        typeSpeed: 150,
        deleteSpeed: 100,
        delaySpeed: 1000,

    })

    return (
        <div className='pb-4 lg:mb-36 lg:mt-16 mt-24 ' id='hero'>
            <div className='flex flex-wrap lg:flex-row-reverse'>
                <div className=' w-full lg:w-1/2 lg:mt-10'>
                    <div className='flex justify-center lg:p-8  '>
                        <img className='border border-stone-900 rounded-3xl' src={pp} />
                    </div>

                </div>

                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start mt-10 pl-4 pr-4'>
                        <h2 className='pb-2 text-4xl tracking-tighter lg:text-6xl font-till'>
                            Hi, I am 
                        </h2>
                        <h2 className='pb-2 text-4xl tracking-tighter lg:text-6xl font-till font-bold'>
                            Chitraksh Chavan
                        </h2>
                        <span className='text-3xl tracking-tight py-5'>
                            I'm a {' '}
                            <span className='text-white text-3xl'>{text}</span>
                            <Cursor />
                        </span>

                        <p className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-justify font-tit' >{HERO_CONTENT}</p>

                        <a href="/chitraksh.pdf" rel='noopener noreferrer' download className=' bg-white rounded-full p-4 text-sm text-stone-800 mb-10 hover:bg-transparent hover:text-white hover:border-zinc-100 border'>Download Resume</a>   
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Herosection
