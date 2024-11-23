import React from 'react'
import { RiBootstrapLine, RiReactjsLine ,RiNodejsLine} from 'react-icons/ri'
import { SiMongodb,SiExpress ,SiPython} from "react-icons/si";
import Marquee from 'react-fast-marquee'
import python from '../assets/python.png'
import java from '../assets/java.png'
import sql from '../assets/mysql.png'
import html from '../assets/html.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'


function Skills() {
  return (
    <div className='pb-24 h-96' id='skills'>
        <h2 className='my-20 text-center text-5xl'>SKILLS</h2>
        <div className='flex flex-wrap items-center justify-center'>
        <div className='flex flex-wrap items-center justify-center w-full md:w-1/2  gap-8'>
            <Marquee className='flex gap-6'>
            <div>
                <RiReactjsLine className='text-6xl  text-cyan-400 mr-8'  />
            </div>
            <div>
                <RiBootstrapLine className='text-6xl text-purple-700 mr-8' />
            </div>
            <div>
                <SiMongodb className='text-6xl text-green-400 mr-8'   />
            </div>
            <div>
                <RiNodejsLine className='text-6xl text-white mr-8'  />
            </div>
            <div>
                <SiExpress className='text-6xl text-cyan-400 mr-8'  />
            </div>
            <div >
            <img className='w-14 h-14 mr-8' src={python}  alt="python--v1"/>
            </div>
            <div>
            <img className='w-14 h-14 mr-8' src={java}  alt="python--v1"/>
            </div>
            <div>
            <img className='w-14 h-14 mr-8' src={sql}  alt="python--v1"/>
            </div>
            <div>
            <img className='w-14 h-14 mr-8' src={html}  alt="python--v1"/>
            </div>
            <div>
            <img className='w-14 h-14 mr-8' src={css}  alt="python--v1"/>
            </div>
            <div>
            <img className='w-14 h-14 mr-8' src={js}  alt="python--v1"/>
            </div>
            </Marquee>
            </div>
        </div>
    </div>
  )
}

export default Skills
