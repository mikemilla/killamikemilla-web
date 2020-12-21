import React from 'react'

function FeaturedItem(entry: any) {
    return (
        <div className='FeaturedItem'>
            {JSON.stringify(entry)}
        </div>
    )
}
  
export default FeaturedItem