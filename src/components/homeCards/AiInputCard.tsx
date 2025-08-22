import React from 'react'
import BadgeButton from '../ui/badge-button'
import AiInput from '../ui/ai-input'
import { Badge } from '../ui/badge'
import { SparklesIcon } from 'lucide-react'

const AiInputCard = () => {
  return (
    <div className='max-w-3xl p-2 my-20 bg-neutral-800/10 border border-black/10 rounded-3xl shadow mx-auto'>
         <Badge
          variant="outline" className='flex shadow-xl p-1 m-5 rounded-[5%] border border-black/10 text-base'>
          <SparklesIcon className="fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
          Latest component
        </Badge>
      <div className='h-full p-6 bg-neutral/800/10 shadow-lg rounded-[3%] mx-auto'>
        {/* <BadgeButton>Latest Component</BadgeButton> */}

     
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mt-2'>AI Input</h2>
        <h6 className='text-base sm:text-lg md:text-xl max-w-xl'>Seamless AI Chat Input box</h6>
        <AiInput />
      </div>

    </div>
  )
}

export default AiInputCard
