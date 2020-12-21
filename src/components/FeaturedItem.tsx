import React from 'react'

function FeaturedItem(data: any) {
    return (
        <a href={data.entry.link}>
            <div className={data.entry.isLast ? 'FeaturedItem isLast' : 'FeaturedItem'}>
                <img src={data.entry.imageUrl} />
                <p>{data.entry.title}</p>
            </div>
        </a>
    )
}
  
export default FeaturedItem