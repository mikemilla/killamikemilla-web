import React from 'react'

function ListItem(entry: any) {
    return (
        <div className='ListItem'>
            {JSON.stringify(entry)}
        </div>
    )
}
  
export default ListItem