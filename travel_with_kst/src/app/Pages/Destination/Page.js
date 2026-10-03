import React from 'react'

function Destination() {
  return (
    <div className="flex justify-around  p-10 bg-[url('/images/Destination-background-image.jpg')] bg-cover bg-center w-screen h-screen">
        <div className='w-[45%]'>
            <h1 className='text-white'>EXPLORE</h1>
            <h1 className='text-white'>DREAM</h1>
            <h1 className='text-transparent [text-stroke:2px_#ffffff] [-webkit-text-stroke:2px_#ffffff] tracking-wider uppercase'>DESTINATION</h1>
            <p className='text-white'>Journey beyond the ordinary into the pristine heart of the Himalayas with KST. From ancient fortress dzongs to legendary mountain passes, discover tailored trekking routes crafted to awaken your spirit of adventure.</p>
        </div>  
        <div className='w-[55%] p-10 text-white flex justify-around gap-1'>
            <div className='border-2 border-white rounded-lg p-4 w-[50%]'>
                This will contain cards for destination
            </div>
            <div className='border-2 border-white rounded-lg p-4 w-[50%]'>
                This will contain cards for destination
            </div>
        </div>
    </div>
  )
}

export default Destination