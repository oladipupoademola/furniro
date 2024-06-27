import React from 'react'


const Main = () => {
  return (
    <main className='relative w-full bg-cover bg-center min-h-[80vh] bg-[url("https://res.cloudinary.com/dnxovvjcz/image/upload/v1718030297/scandinavian-interior-mockup-wall-decal-background_1_y9u6be.png")] '>
        
        <div className='absolute shadow-md rounded p-8 border w-[500px] h-[320px] bg-[#fff3e3] top-[120px] right-[100px] '>
        <h6 className='text-[#333333] font-bold'>New Arrivals</h6>
        <h1 className='text-[52px] text-[#b88e2f] font-bold leading-none  '>Discover Our New Collection</h1>
        <p className='font-bold text-[#333333]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni excepturi ullam qui velit, ipsa error?</p>
        <button className='h-[74px] w-[222px] bg-[#b88e2f] mt-3 rounded shadow-sm text-white font-bold text-base'>Buy Now</button>
        </div>
    </main>
  )
}

export default Main
