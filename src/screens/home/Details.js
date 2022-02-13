import React from 'react'
import Header from '../../common/header/Header'
import moviesData from '../../common/header/moviesData'


function Details() {
  
  return (
    <div>
      {moviesData.map((movie)=>(
        <div key={movie.id}>

          <h1>{movie.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default Details
