import React from 'react'
import { SkiperCard } from '../ui/skiper-card'
import BadgeButton from '../ui/badge-button'
import card4 from '/public/images/card4.webp'
import card5 from '/public/images/card5.webp'
import card6 from '/public/images/card6.webp'
import card7 from '/public/images/card7.webp'
import card8 from '/public/images/card8.webp'
import card9 from '/public/images/card9.webp'
import { cn } from '@/lib/utils'

const SpecialCard = () => {
  return (
    <div className='my-20 px-4 max-w-4xl rounded-[2%] border-neutral/800/5 shadow-3xl mx-auto'>
      <div className='max-w-4xl rounded-[2%] m-4 mx-auto'>
        <BadgeButton>Component Preview</BadgeButton>
        <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-8'>Tailwind + Framer + React</h2>
        <h5 className='font-medium text-lg sm:text-xl md:text-2xl opacity-70 text-center mb-8'>Everything you need to ship</h5>
        <SkiperCard
          title='Component that pop'
          description='Make your app 🤌'
          step1img1Class={cn(
            "pointer-events-none w-1/2 border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
            "left-1/4 top-[57%] rounded-[24px] max-md:scale-150 md:left-[35px] md:top-[29%]",
            "md:group-hover:translate-y-2"
          )}
          step1img2Class={cn(
            "pointer-events-none w-3/5 border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
            "left-[65%] top-[53%] rounded-2xl max-md:scale-150 md:left-[calc(50%+35px+1rem)] md:top-[21%]",
            "md:group-hover:-translate-y-6"
          )}
          step2img1Class={cn(
            "pointer-events-none w-1/2 rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
            "left-1/4 top-[69%] max-md:scale-150 md:left-[35px] md:top-[30%]",
            "md:group-hover:translate-y-2"
          )}
          step2img2Class={cn(
            "pointer-events-none w-2/5 rounded-2xl border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
            "left-[70%] top-[53%] max-md:scale-125 md:left-[calc(50%+27px+1rem)] md:top-1/4",
            "md:group-hover:-translate-y-6"
          )}
          step3imgClass={cn(
            "pointer-events-none w-[90%] rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
            "left-[5%] top-[50%] md:left-[68px] md:top-[30%]"
          )}
          // step4imgClass={cn(
          //   "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
          //   "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
          // )}
          image={{
            step1dark1: card8,
            step1dark2: card7,
            step1light1: card8,
            step1light2: card7,
            step2dark1: card6,
            step2dark2: card5,
            step2light1: card6,
            step2light2: card5,
            step3dark: card4,
            step3light: card4,
            step4light: card9,
            alt: "Something",
          }}

        />
      </div>
    </div>
  )
}

export default SpecialCard