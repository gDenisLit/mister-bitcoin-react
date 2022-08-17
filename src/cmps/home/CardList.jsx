import React from 'react'
import { PriceCard } from './PriceCard'

export function CardList({ priceData }) {
    return (
        <ul className='price-card-list clean-list flex'>
            {priceData.map(p => {
                return (
                    <li
                        key={p.id}
                        className='price-card'
                    >
                        <PriceCard data={p} />
                    </li>

                )
            })}
        </ul>
    )
}
