import React from 'react'

function ListItem(data: any) {

    console.log(data)

    return (
        <a href={data.entry.link}>
            <div className={data.entry.isLast ? 'ListItem isLast' : 'ListItem'}>
                <img src={data.entry.imageUrl} />
                <p>{data.entry.title}</p>
            </div>
        </a>
    )
}
  
export default ListItem