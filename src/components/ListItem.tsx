import React from 'react'

function ListItem(data: any) {
    return (
        <a href={data.entry.link} target={data.entry.openNewTab ? '_blank' : ''}>
            <div className={data.entry.isLast ? 'ListItem isLast' : 'ListItem'}>
                <img src={data.entry.imageUrl} />
                <p>{data.entry.title}</p>
            </div>
        </a>
    )
}
  
export default ListItem