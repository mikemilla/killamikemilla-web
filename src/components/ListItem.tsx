import React from 'react'

function ListItem(data: any) {
    return (
        <div className='ListItem'>
            {data.entry.title}
        </div>
    )
}
  
export default ListItem