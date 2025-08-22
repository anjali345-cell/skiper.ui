import React from 'react'
import { CardCarousel } from '../ui/card-carousel'

const CardCarouselParent = () => {

const images = [
     {src:'/Images/card1.webp', alt:'Image 1'},
     {src:'/Images/card2.webp', alt:'Image 2'},
     {src:'/Images/card3.webp', alt:'Image 3'},
]

  return (
    <div>
     <CardCarousel images={images} showPagination={true}/>
    </div>
  )
}

export default CardCarouselParent
