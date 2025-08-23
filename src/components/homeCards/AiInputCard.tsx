import React from 'react'
import BadgeButton from '../ui/badge-button'
import AiInput from '../ui/ai-input'
import { Badge } from '../ui/badge'
import { SparklesIcon } from 'lucide-react'

const AiInputCard = () => {
  return (
   <div className='max-w-4xl my-10 bg-neutral-800/5 border border-white/10 rounded-4xl shadow-lg mx-auto'>
     <div className='max-w-4xl p-1 my-2 bg-neutral-800/5 border border-white/10 rounded-4xl shadow-sm mx-2'>
      <Badge
        variant="outline" className='flex shadow-xl bg-neutral-800/10 py-1 m-5 rounded-2xl border border-black/10 text-base'>
        <SparklesIcon className="fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
        Latest component
      </Badge>
      <h2 className='text-2xl px-3 sm:text-3xl md:text-4xl font-bold mt-2'>AI Input</h2>
      <h6 className='text-base px-3  sm:text-lg md:text-xl max-w-sm'>Seamless AI Chat Input box</h6>

      <AiInput />


    </div>
   </div>
  )
}


export default AiInputCard
