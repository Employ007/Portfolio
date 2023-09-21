import React from 'react'

const SkillSet = () => {
    const cardData = [
        {
            title : "React Maestro",
            desc : "Building dynamic, responsive, and interactive web applications with the power of React. Elevating user interfaces to the next level.",
            
        },
        {
            title : "Strapi Magician",
            desc : "Empowering content creation and management with Strapi CMS. Crafting flexible, scalable, and user-friendly backend systems for seamless website and app content control",
            
        },
        {
            title : "Redux Virtuoso",
            desc : "Harnessing the power of Redux for efficient, predictable, and scalable state management in web applications. Ensuring data flows seamlessly for a superior user experience.",
            
        }
    ]
  return (
    <>
    <div className='max-w-[1600px] mx-auto px-[30px] py-[80px] '>
        <div className='uppercase w-full px-[100px] font-[Syncopate] text-[38px] text-gray-400 tracking-widest flex justify-center'>
            Skill sets
        </div>
        <div className='w-[40%] mt-[50px] mx-auto relative  grid grid-cols-1 gap-5 '>
            {
                cardData?.map((items , index) =>{
                    return(

            <div key={index} className={`max-w-[400px] transition-all duration-300  px-[15px] group py-[20px] text-[grey]  ${ index % 2 == 0 ? "ml-auto hover:translate-x-[4px]  hover:translate-y-[-4px]" : "mr-auto hover:translate-x-[-4px]  hover:translate-y-[-4px]" }    font-[Syncopate] hover:bg-[#80808017] bg-[#8080802c] rounded-[10px]`}>
                <h1 className='font-bold text-[18px] uppercase group-hover:text-white '>{items.title}</h1>
                <p className='my-[10px] hover:tracking-wide'>{items.desc}</p>
                <button className='flex items-center group gap-2 w-full'>
                    <div className='w-[30px] '>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path className='group-hover:fill-[white] fill-[grey]'  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>
                    </div>
                <p className='group-hover:text-[white]'>Learn more</p>

                </button>
            </div>
                    )
                })
            }
            

        </div>
    </div>
    
    </>
  )
}

export default SkillSet