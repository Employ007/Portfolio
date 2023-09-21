import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='max-w-[1600px] mx-auto  boby '>
      <div className=' py-[10px] px-[30px]  background font-[900] text-[25px]'>

            FRONTEND REACT DEVELOPER
      </div>

       

    </div>
    <div className='max-w-[1600px] mx-auto  boby '>
      <div className=' py-[10px] px-[30px] uppercase background font-[900] text-[20px]'>

            Ahsan Ayaz
      </div>

       

    </div>
    <div className='max-w-[1600px] mx-auto  boby flex justify-center '>
      <div className=' py-[10px] px-[30px] text-[grey] w-[40%]'>

           <div className='w-[100%] uppercase flex justify-between'>
            <h1 className='cursor-pointer hover:text-white hover:font-bold'>Developing Career</h1>
            <h1 className='cursor-pointer hover:text-white hover:font-bold'>Projects</h1>
            <h1 className='cursor-pointer hover:text-white hover:font-bold'>About</h1>
            <h1 className='cursor-pointer hover:text-white hover:font-bold'>Contact</h1>


           </div>
      </div>

       

    </div>
    </>
    
  )
}

export default Navbar