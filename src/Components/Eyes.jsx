import React, { useEffect, useState } from 'react'

const Eyes = () => {

  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array to run effect only once


  return (
    <div className='eyes w-full  h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-0.3"  className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className=' absolute flex  gap-10 top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]            ' >
          <div className='w-[15vw] h-[15vw]  bg-white  rounded-full flex items-center justify-center'>
            <div className=' relative w-2/3 h-2/3  bg-black rounded-full'>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='line absolute top-1/2 left-1/2 h-10 w-full -translate-x-[50%] translate-y-[50%]  '>
                <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
              </div>
              {/* <div 
                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-white-900'>
                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
              </div> */}

            </div>


          </div>
          <div className='w-[15vw] h-[15vw] bg-white  rounded-full flex items-center justify-center'>
            <div className='relative  w-2/3 h-2/3 flex items-center justify-center  bg-black rounded-full'>
            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='line absolute top-1/2 left-1/2 h-10 w-full -translate-x-[50%] -translate-x-[50%]  '>
                <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Eyes