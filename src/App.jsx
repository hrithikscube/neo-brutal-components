import React from 'react'

const App = () => {

  return (
    <div className='flex flex-col justify-center items-center mt-10   '>

      <div className='group relative w-[202px]'>
        <button className='bg-black h-[63px] w-[202px] text-xl text-white rounded group-hover:-translate-x-6 group-hover:-translate-y-6 transition-transform font-mono z-20 absolute'>
          Start Now
        </button>

        <div className='bg-teal-500 w-[202px] h-[63px] rounded group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform absolute top-0 z-10 border border-black  ' />
        <div className='bg-pink-400 w-[202px] h-[63px] rounded group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform absolute top-0 z-10 border border-black  ' />
      </div>

    </div>
  )
}

export default App