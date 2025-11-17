import React from 'react'
import { Link } from 'react-router-dom'


const BhojanCard = ({id, name, imageUrl, mealType, dietType, estimatedPrice}) => {
  return (
    <Link>
      <img src={imageUrl} alt={name} />
    </Link>
  )
}

export default BhojanCard
