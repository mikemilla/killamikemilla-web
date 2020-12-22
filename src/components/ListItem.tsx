import React, { useEffect } from 'react'

function ListItem(data: any) {

    useEffect(() => {
        setTimeout(() => {
            const element = document.getElementById(`ListItem-${data.entry.index}`)
            if (element) element.classList.add('animate')
        }, 75 * data.entry.index + 1)
    }, [data.entry.index])

    return (
        <a href={data.entry.link} target={data.entry.openNewTab ? '_blank' : ''}>
            <div id={`ListItem-${data.entry.index}`} className={data.entry.isLast ? 'ListItem isLast' : 'ListItem'}>
                <img alt='' src={data.entry.imageUrl} />
                <p>{data.entry.title}</p>
            </div>
        </a>
    )
}
  
export default ListItem