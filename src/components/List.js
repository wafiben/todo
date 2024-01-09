import React from 'react'
import Card from './Card'

function List({users}) {
  return (
    <div className='list-bloc'>
    {users.map((elt)=><Card elt={elt}/>)}
    </div>
  )
}

export default List