import React from 'react'
import BadgeButton from '../ui/badge-button'
import AiInput from '../ui/ai-input'

const AiInputCard = () => {
  return (
    <div className='max-w-3xl p-2 my-20 bg-white/20 dark:bg-black/50 rounded-3xl shadow mx-auto'>
      <div className='h-full p-6 bg-[#f4f4f4] shadow dark:bg-[#232323] rounded-3xl mx-auto'>
        <BadgeButton>Latest Component</BadgeButton>
        <h2 className='text-black dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-2'>AI Input</h2>
        <h6 className='text-black dark:text-white text-base sm:text-lg md:text-xl max-w-xl'>Seamless AI Chat Input box</h6>
        <AiInput />
      </div>

    </div>
  )
}

export default AiInputCard
