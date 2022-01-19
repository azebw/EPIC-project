import React from 'react'
import CollectionCard from './CollectionCard'
import './Punklist.css'
const PunkList = ({punkListData,setSelectedPunk}) => {
  return (
    <div className='punkList'>
      {punkListData.map(punk=>(
        <div className='punlListImage' onClick ={()=>setSelectedPunk(punk.token_id)}>
          <CollectionCard
          KEY ={punk.token_id}
          id={punk.token_id}
          name={punk.name}
          traits={punk.traits}
          image={punk.image_url}
          />
        </div>
      ))}
    </div>
  )
}

export default PunkList
