import React from 'react'
import { ServiceCard } from '../Components'
import data from '../constants/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Service = () => {
  return (
    <div>
        <div className='px-[10px] mt-[80px] space-y-[20px] md:px-[120px]'>
            <h1 className='w-[250px] text-[30px] md:text-[60px] md:w-[480px] font-black leading-[70px] md:mt-[150px]'>We build digital <span className='text-[#D5333E]'>for a Living.</span></h1>
            <div className='space-y-[20px] text-[15px] md:w-[600px] md:text-[16px]'>
                <p>Codigo comprises a team of brilliant minds and innovative individuals who create 
                    digital products people love to use</p>
                <p>We believe that seamless, user-centric and meaningful experiences transcend mediums 
                    and touchpoints.</p>
            </div>
        </div>
        <div className='px-[10px] mt-[50px] space-y-[50px] md:space-y-0 md:grid md:grid-cols-3  md:mx-[200px] md:mt-[120px] md:justify-between md:gap-14 md:pl-12'>
            {data.map((data,index)=>(
                <ServiceCard key={index} data ={data}/>
            ))}
            
        </div>
        <div className='flex flex-col items-center mt-5 pt-10 px-[10px] bg-[#FAFAFA] w-full '>
            <div className='text-[#D5333E] font-bold text-[30px]'>Let's have a chat</div>
            <div className='flex flex-col md:flex-row md:justify-between w-full mt-[50px]  '>
            <div className='w-full md:flex md:items-center md:justify-evenly '>
                <div className='flex justify-between items-center w-full'>
                    <div className='space-y-2 w-full'>
                    <div className='flex justify-between items-center w-full '>
                        <h1 className='text-2xl font-black hover:text-[#D5333E]'>Build</h1>
                        <FontAwesomeIcon icon={faRightLong} size='3xs' color='#D5333E' />
                    </div>
                    <p className='text-[13px]'>Help you build something</p>
                    </div>
                    
                </div>
                <hr className='border-black md:w-1/2 my-[30px] md:rotate-90 md:my-0'/>

            </div>
            <div className='w-full md:flex md:items-center md:justify-between  '>
                <div className='flex justify-between items-center w-full'>
                    <div className='space-y-2 w-full'>
                    <div className='flex justify-between items-center w-full '>
                        <h1 className='text-2xl font-black hover:text-[#D5333E]'>Co-incubate</h1>
                        <FontAwesomeIcon icon={faRightLong} size='3xs' color='#D5333E' />
                    </div>
                    <p className='text-[13px]'>Co-incubate an idea together</p>
                    </div>
                    
                </div>
                <hr className='border-black md:w-1/2 my-[30px] md:rotate-90 md:my-0'/>

            </div>
            <div className='w-full md:flex md:items-center md:justify-between  '>
                <div className='flex justify-between items-center w-full'>
                    <div className='space-y-2 w-full'>
                    <div className='flex justify-between items-center w-full '>
                        <h1 className='text-2xl font-black hover:text-[#D5333E]'>Customize</h1>
                        <FontAwesomeIcon icon={faRightLong} size='3xs' color='#D5333E' />
                    </div>
                    <p className='text-[13px]'>Customise a solution for your business</p>
                    </div>
                    
                </div>
                <hr className='border-black md:w-1/2 my-[30px] md:rotate-90 md:my-0'/>

            </div>
           
            <div className='w-full md:flex md:items-center md:justify-between  '>
                <div className='flex justify-between items-center w-full'>
                    <div className='space-y-2 w-full'>
                    <div className='flex justify-between items-center w-full '>
                        <h1 className='text-2xl font-black hover:text-[#D5333E]'>Organise</h1>
                        <FontAwesomeIcon icon={faRightLong} size='3xs' color='#D5333E' />
                    </div>
                    <p className='text-[13px]'>Organise learning sessions with us</p>
                    </div>
                    
                </div>
                <hr className='border-black md:w-1/2 my-[30px] md:rotate-90 md:my-0'/>

            </div>

            <div className='w-full md:flex md:items-center md:justify-between  '>
                <div className='flex justify-between items-center w-full'>
                    <div className='space-y-2 w-full'>
                    <div className='flex justify-between items-center w-full '>
                        <h1 className='text-2xl font-black hover:text-[#D5333E]'>Tech for Hire</h1>
                        <FontAwesomeIcon icon={faRightLong} size='3xs' color='#D5333E' />
                    </div>
                    <p className='text-[13px]'>Hire experienced tech talents</p>
                    </div>
                    
                </div>
             

            </div>
           
           
            </div>
            <div className='space-x-10 mt-[70px]'>
                <FontAwesomeIcon icon={faFacebookF} size='xl' color='#000'/>
                <FontAwesomeIcon icon={faTwitter} size='xl' color='#000' />
                <FontAwesomeIcon icon={faInstagram} size='xl' color='#000' />
                <FontAwesomeIcon icon={faLinkedinIn} size='xl' color='#000' />
            </div>
            <div className='my-5 space-y-2'>
            <p className='text-xs text-center'>Copyright © Codigo - Mobile App Developer Singapore</p>
            <p className='text-xs text-center'>+65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore 573970</p>
            </div>
        </div>
    </div>
  )
}

export default Service