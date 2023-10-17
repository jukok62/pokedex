import React from 'react'
import pokedex from '../services/pokedex';
import {useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Pokemon from '../components/Pokemon';

const Pokemons = () => {

    const [pok, setPok] = useState([]);
    const fetchPokemon = async () => {
        try{
            const response = await pokedex.getPokemon()
            setPok(response.data.results)
            console.log(response)
        }catch(e){
            console.log(e)
        }
    }

    useEffect (() => {
        fetchPokemon()
    },[])
    
    return <>
        {pok.map(p => {
            return <Pokemon pokemon={p}/> 
        })}
    </>;
}
 
export default Pokemons;