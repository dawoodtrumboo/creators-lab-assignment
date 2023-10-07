import React from 'react'
import './servicecard.css'


const ServiceCard = ({data}) => {
  return (
    <div>
        <div className='space-y-[12px] sm:hidden'>
        <div className='font-black text-[12px]'>{data.title}</div>
        <div className='font-bold text-[20px]'>{data.title2}</div>
        <div className='bg-[#FFFF65] w-[120px] h-[120px] flex items-center justify-center rounded-full mt-[30px] p-3' style={{backgroundColor: data.backgroundColor}}>
        <img src={data.image} alt='ue' className='w-[80%] '/>
        </div>
        <div className='text-[14px]'>
            {data.description}
        </div>
        </div>

        <div className='hidden outer-div md:flex flex-col items-center'>
        <div className='circle-div relative bg-[#FFFF65] w-[120px] h-[120px] md:w-[200px] md:h-[200px] flex items-center justify-center rounded-full' style={{backgroundColor: data.backgroundColor}}>
        <div className='h-text absolute flex flex-col items-center justify-between h-1/2 top-[40px]'>
        <h1 className='font-black text-[6px] '>{data.title}</h1>
        <div className='font-black text-[10px] w-[80%] text-center '>{data.title2}</div>
        <div className='text-[6px] w-[70%] text-center mt-6'>{data.description}</div>
        </div>
        <div className='image-div max-w-[160px] max-h-[120px] flex justify-center items-center p-2'>
        <img src={data.image} alt='ue' className='w-[100%]'/>
        </div>
        
        </div>
        <div className='title flex flex-col items-center mt-[80px]'>
        <div className='font-black text-[22px]'>{data.title}</div>
        <div className='font-normal text-[16px]'>{data.title3}</div>
        </div>
        </div>



    </div>
  )
}

export default ServiceCard