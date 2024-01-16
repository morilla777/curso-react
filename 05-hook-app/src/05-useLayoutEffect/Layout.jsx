import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";


export const Layout = () => {

   const { counter, increment } = useCounter( 1 ) ;

   const { data, isLoading } = useFetch( `https://rickandmortyapi.com/api/location/${ counter }` );

   //const { data, isLoading, hasError } = useFetch( `https://rickandmortyapi.com/api/location/${ counter }` );

   //console.log({ data, isLoading, hasError } );

   const { name, type } = !!data && data;

   
  return (
    <>
        <h1>BreakinBad Quotes</h1>
        <hr/>

        {
            isLoading 
              ? <LoadingQuote />
              : <Quote name={ name } type={ type } />
        }

        <button onClick={ () => increment() } className="btn btn-primary" disabled={ isLoading }>
          Next quote
        </button>

    </>
  )
}