import React, { useEffect } from 'react'

function FeaturedItem(data: any) {

    useEffect(() => {
        setTimeout(() => {
            const element = document.getElementById(`FeaturedItem-${data.entry.index}`)
            if (element) element.classList.add('animate')
        }, data.entry.timeout)
    }, [data.entry.timeout])

    return (
        <a href={data.entry.link} target={data.entry.openNewTab ? '_blank' : ''}>
            <div id={`FeaturedItem-${data.entry.index}`} className={data.entry.isLast ? 'FeaturedItem isLast' : 'FeaturedItem'}>
                <img src={data.entry.imageUrl} />
                <p>{data.entry.title}</p>
            </div>
        </a>
    )
}
  
export default FeaturedItem