import React from 'react'

function FeaturedItem(data: any) {
    return (
        <a href={data.entry.link} target={data.entry.openNewTab ? '_blank' : ''}>
            <div className={data.entry.isLast ? 'FeaturedItem isLast' : 'FeaturedItem'}>
                <img src={data.entry.imageUrl} />
                <p>{data.entry.title}</p>
            </div>
        </a>
    )
}
  
export default FeaturedItem