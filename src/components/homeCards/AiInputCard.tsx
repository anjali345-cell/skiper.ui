import React from 'react'
import BadgeButton from '../ui/badge-button'
import AiInput from '../ui/ai-input'

const AiInputCard = () => {
  return (
    <div className='w-[61.5%] p-2 my-20 rounded-3xl shadow bg-white dark:bg-gray-800 mx-auto'>
      <div className='h-full p-6 bg-[#f4f4f4] shadow dark:bg-gray-700 rounded-3xl mx-auto'>
        <BadgeButton>Latest Component</BadgeButton>
        <AiInput />
      </div>

    </div>
  )
}

export default AiInputCard
