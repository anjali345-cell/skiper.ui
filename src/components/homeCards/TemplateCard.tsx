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

    <div className="mb-10 max-w-4xl rounded-[3%] border-neutral/5 p-2 my-10 shadow-lg shadow-sm mx-auto">
      <div className="border-neutral-500 bg-neutral-800/5 max-w-6xl shadow-sm rounded-[3%] mx-auto">
        <div className="p-6 sm:p-8 border-neutral/5 text-base shadow rounded-[3%]">
          <BadgeButton
          >
            Templates
          </BadgeButton>
          <div className="mt-6 cover-fit rounded-xl grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

            {cards.map((card, index) => (
              <MinimalCard className='m-2 w-full' key={index}>
                {card.image && (
                  <MinimalCardImage
                    className="h-[150px] sm:h-[180px] object-cover rounded-t-2xl"
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