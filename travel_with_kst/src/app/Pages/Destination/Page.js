import React from 'react'

const basePath = process.env.NODE_ENV === 'production' ? '/travel-with-KST' : '';

function Destination() {
  return (
    <div 
    style={{ 
        backgroundImage: `url('${basePath}/images/Destination-background-image.jpg')` 
      }} 
    className="flex justify-around  p-10 bg-cover bg-center w-screen h-screen">
        <div className='w-[45%]'>
            <h1 className='text-white'>EXPLORE</h1>
            <h1 className='text-white'>DREAM</h1>
            <h1 className='text-transparent [text-stroke:2px_#ffffff] [-webkit-text-stroke:2px_#ffffff] tracking-wider uppercase'>DESTINATION</h1>
            <p className='text-white'>Journey beyond the ordinary into the pristine heart of the Himalayas with KST. From ancient fortress dzongs to legendary mountain passes, discover tailored trekking routes crafted to awaken your spirit of adventure.</p>
            <button className='text-white bg-blue-600 p-2 rounded-lg mt-10'>BOOK NOW</button>
        </div>  
        <div className='w-[55%] p-10 text-white flex justify-around gap-1'>
            <div className='border-2 border-white rounded-lg  w-[50%] bg-white'>
            <img src={`${basePath}/images/logo.jpeg`} className='w-full h-[45%] rounded-lg'/>
                <p className='font-bold text-black p-1 text-xl'>
                    10 Must-vist Hidden Places
                </p>
                <p className='text-black p-1'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, atque laboriosam. Expedita ea fugit harum assumenda repellat, fugiat culpa eligendi officiis odit neque. Architecto possimus perferendis fugiat nemo qui minima?
                </p>
                <div className='flex justify-center'><button className='text-white border-blue-600 p-1 m-1 bg-blue-600 rounded-lg'>Read More</button></div>
            </div>
            <div className='border-2 border-white rounded-lg  w-[50%] bg-white'>
                <img src={`${basePath}/images/logo.jpeg`} className='w-full h-[45%] rounded-lg'/>
                <p className='font-bold text-black p-1 text-xl'>
                    10 Must-vist Hidden Places
                </p>
                <p className='text-black p-1'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, atque laboriosam. Expedita ea fugit harum assumenda repellat, fugiat culpa eligendi officiis odit neque. Architecto possimus perferendis fugiat nemo qui minima?
                </p>
                <div className='flex justify-center'><button className='text-white border-blue-600 p-1 m-1 bg-blue-600 rounded-lg'>Read More</button></div>
            </div>
        </div>
    </div>
  )
}

export default Destination