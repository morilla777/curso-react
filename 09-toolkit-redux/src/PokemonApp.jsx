import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon/thunks";


export const PokemonApp = () => {

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( getPokemons() )
  }, [])

  const { page, pokemons, isLoading } = useSelector( state => state.pokemon )

  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        <span style={!isLoading ? {display:'none'} : undefined }>Loading...</span>

        <ul>
          {
            pokemons.map( pokemon => 
              <li key={pokemon.name}>
                {pokemon.name}
              </li>
            )
          }
        </ul>

        <button
           disabled={ isLoading }
           onClick={ () => dispatch( getPokemons( page ))}
        >
          Next
        </button>
    </>
  )
}
