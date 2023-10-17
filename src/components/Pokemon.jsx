import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/pokemon.css'

const Pokemon = ({pokemon}) => {
    return <>
    <div className='grid'>
        <div className='card'>
            <h1>{pokemon.name}</h1>
        </div>
    </div>
    
        
    </>;
}
 
export default Pokemon;