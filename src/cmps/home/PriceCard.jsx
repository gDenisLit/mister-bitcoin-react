import React from 'react'

export function PriceCard({data}) {
    const val = '$' + data.val.toLocaleString()  
    return (
        <>
            <h3>{data.title}</h3>
            <p>{val}</p>
        </>
    )
}
