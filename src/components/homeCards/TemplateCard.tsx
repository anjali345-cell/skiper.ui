import React from 'react'
import MinimalCard, { MinimalCardDescription, MinimalCardImage, MinimalCardTitle } from '../ui/minimal-card'
import BadgeButton from '../ui/badge-button'
import Image from 'next/image'

const TemplateCard = () => {
  const cards = [
    {
      image: 'https://skiper-ui.com/_next/image?url=https%3A%2F%2Fi.giphy.com%2Fmedia%2Fv1.Y2lkPTc5MGI3NjExYTFjaG1wM3o0ZzBlbXA2Z2Ywc243d2ttdGZpZXVpbXdmYjJreHp5ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw%2FsZ7wUinnbIQYlucMXv%2Fgiphy.gif&w=256&q=75',
      title: "Landing Page",
      description:
        "Modern landing page template featuring Ramer Motion animations, custom navigation components, and responsive design optimized for conversions.",
    },
    {
      image: 'https://skiper-ui.com/_next/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2Fv1.Y2lkPTc5MGI3NjExaWVwNXVkdXM3aWM4NXM2a2s2czFhd283NHdrbWFsdm43bGdsMXp4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw%2FSM08k77xWhQtQDDluI%2Fgiphy.gif&w=640&q=75',
      title: "Manifest",
      description:
        "Vector embedding solution for building Perplexity-style AI applications with RAG retrieval, real-time source citations, and pgvector search functionality.",
    },
    {
      image: 'https://skiper-ui.com/_next/image?url=https%3A%2F%2Fmedia4.giphy.com%2Fmedia%2Fv1.Y2lkPTc5MGI3NjExanI3bjNzdTliOTF0aW9xMzY3Y21sdnE3Nnowb3l6YW4xeXZtdTE0eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw%2FL9F8Kt6IYdRvHbcHvl%2Fgiphy.gif&w=256&q=75',
      title: "Dev Portfolio",
      description:
        "Comprehensive SEO analysis tool with web crawling, performance testing, and AI-powered optimization recommendations for website improvement.",
    }
  ]
  return (

    <div>
      <div className='w-[69%] p-2 my-20 bg-white dark:bg-gray-800 mx-auto rounded-3xl mx-auto'>
        <div className='h-full p-6 bg-[#f4f4f4] dark:bg-gray-700 shadow rounded-3xl mx-auto'>
          <BadgeButton>Templates</BadgeButton>
          <div className='flex justify-between items-center'>

            {cards.map((card, index) => (
              <MinimalCard className='m-2 w-[460px]' key={index}>
                {card.image && (
                  <MinimalCardImage
                    className="h-[120px]"
                    src={card.image}
                    alt={card.title}
                  />
                )}

                <MinimalCardTitle>{card.title}</MinimalCardTitle>
                <MinimalCardDescription>
                  {card.description}
                </MinimalCardDescription>
              </MinimalCard>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default TemplateCard
