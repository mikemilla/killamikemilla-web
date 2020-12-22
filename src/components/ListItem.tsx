import React, { useEffect } from 'react'

function ListItem(data: any) {

    useEffect(() => {
        setTimeout(() => {
            const element = document.getElementById(`ListItem-${data.entry.index}`)
            if (element) element.classList.add('animate')
        }, data.entry.timeout)
    }, [data.entry.timeout])

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