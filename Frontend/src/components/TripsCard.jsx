import React from 'react'
import { Link } from 'react-router-dom'
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-react-buttons'
import { cn, getFirstWord } from '../../lib/utils'

const TripsCard = ({ id, name, location, imageUrl, tags, price }) => {

  return (
    <Link to={`/trips/${id}`} className="trip-card">
      
      <img src={imageUrl} alt={name} className="rounded-lg w-full h-48 object-cover" />

      <article className="p-3">
        <h1 className="font-bold text-lg">{name}</h1>

        <figure className="flex gap-2 items-center text-gray-600">
          <img src="/icons/location-mark.svg" alt="location" className="size-4" />
          <figcaption>{location}</figcaption>
        </figure>
      </article>

      <div className="mt-3 pl-4 pr-3 pb-4">
        <ChipListComponent id="travel-chip">
          <ChipsDirective>
            {tags?.map((tag, index) => (
              <ChipDirective
                key={index}
                text={getFirstWord(tag)}
                cssClass={cn(
                  index === 0
                    ? '!bg-pink-50 !text-pink-500'
                    : '!bg-green-50 !text-green-700'
                )}
              />
            ))}
          </ChipsDirective>
        </ChipListComponent>
      </div>

      <article className="tripCard-pill">
        ₹{price}
      </article>
    </Link>
  )
}

export default TripsCard
