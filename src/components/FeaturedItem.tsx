import React from 'react'

function FeaturedItem(data: any) {
    return (
        <div className='FeaturedItem'>
            <img src={data.entry.imageUrl} />
            <p>{data.entry.title}</p>
        </div>
    )
}
  
export default FeaturedItem