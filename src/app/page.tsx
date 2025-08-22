"use client"

import React from 'react'
import AiInputCard from '@/components/homeCards/AiInputCard'
import CardCarouselParent from '@/components/homeCards/CardCarouselParent'
import EndCard from '@/components/homeCards/EndCard'
import SpecialCard from '@/components/homeCards/SpecialCard'
import TemplateCard from '@/components/homeCards/TemplateCard'
import ThemeChange from '@/components/homeCards/ThemeChange'
import HeroContent from '@/components/navbar/landingPage/HeroContent'
import Navbar from '@/components/navbar/Navbar'
import Section2 from '@/components/section/Section2'
import Section1 from '@/components/section/Section1'


const page = () => {
  return (
    <div>
      <Navbar />
       <HeroContent />
       <CardCarouselParent />
       <TemplateCard />
       <Section1 />
       <SpecialCard />
       <AiInputCard />
       <ThemeChange />
       <Section2 />
       <EndCard />
    </div>
  )
}

export default page
