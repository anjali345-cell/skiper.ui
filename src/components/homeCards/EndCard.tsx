import React from 'react'
import AnimatedNumberCountdown from '../ui/animated-number-countdown'

const EndCard = () => {
  return (
    <div className=" mx-auto mb-10 max-w-4xl rounded-[40px] border border-black/5 dark:border-white/20 p-2 shadow-sm ">
      <div className=" relative mx-auto  h-[400px] max-w-4xl overflow-hidden rounded-[38px] border border-black/5 bg-[#ff4017] p-2 shadow-sm ">
        <p className="mt-20 text-center text-white">Bringing simplicity to the future</p>

           <div className="flex justify-center w-full">
        <a href="#" className="items-center mt-10 rounded-full border border-white/20 text-sm p-1 font-medium">
          <p
            style={{ 'shiny-width': '100px' }}
            className="mx-auto max-w-md dark:text-neutral-400/70 animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite] bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80 inline-flex group text-white items-center border justify-center rounded-full px-4 py-1 transition ease-out"
          >
            <span> 🎉 &nbsp;| New component in </span> &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right ml-1 size-3 group-hover:rotate-180 group-hover:ml-4 transition-all duration-300 ease-in-out group-hover:translate-x-0.5"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </p>
        </a>
      </div>
      <h1 className="absolute inset-x-0 mt-[80px] text-center text-[100px] font-semibold text-[#ff4017] sm:mt-[30px] sm:text-[190px] ">skiper/ui </h1>
      </div>
   
    </div>
  )
}

export default EndCard
