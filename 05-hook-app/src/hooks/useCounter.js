import { useCallback, useState } from "react"


export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue )


    const increment = useCallback (( incr = 1) => {
        setCounter( counter + incr);
    }, [counter]);

    const decrement = useCallback (() => {
        setCounter( counter - 1);
    }, [counter]);

    const reset = useCallback (() => {
        setCounter( initialValue );
    }, [initialValue]);

    return {
        counter,
        increment,
        decrement,
        reset
    }
}