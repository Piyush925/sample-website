import React from 'react'

export default function Listing({ category, items }) {

    return (
        <>
            <h2>{category}</h2>
            <ul>
                {items && items.length > 0 ? items.map((list, index) => <li key={index}>{list}</li>) : null}
            </ul>
        </>
    )
}