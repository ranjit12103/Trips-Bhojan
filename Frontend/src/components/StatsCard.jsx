import React from 'react'
import { calculateTrendPercentage } from '../../lib/utils'
// Optional: if you use classnames, import it — or use template literals instead
// import cn from 'classnames'

const StatsCard = ({
  headerTitle,
  total,
  lastMonthCount,
  currentMonthCount
}) => {

  const { trend, percentage } = calculateTrendPercentage(currentMonthCount, lastMonthCount)
  const isDecrement = trend === 'decrement'

  return (
    <article className='stats-card'>
      <h3 className='text-base font-medium'>
        {headerTitle}
      </h3>

      <div className="content">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">
            {total}
          </h2>

          <div className="flex items-center gap-2">
            <figure className='flex items-center gap-1'>
              <img
                src={`/icons/${isDecrement ? 'arrow-down-red.svg' : 'arrow-up-green.svg'}`}
                className='size-5'
                alt={isDecrement ? 'decrease arrow' : 'increase arrow'}
              />
              <figcaption
                className={`text-sm font-medium ${isDecrement ? 'text-red-500' : 'text-green-700'}`}
              >
                {Math.round(percentage)}%
              </figcaption>
            </figure>

            <p className='text-sm font-medium text-gray-100 truncate'>
              vs last Month
            </p>
          </div>
        </div>

        <img
          src={`/icons/${isDecrement ? 'decrement.svg' : 'increment.svg'}`}
          alt="Trend graph"
          className='xl:w-32 w-full h-full md:h-32 xl:h-full'
        />
      </div>
    </article>
  )
}

export default StatsCard
