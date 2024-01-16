
import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer";


export const useTodo = ( initialState = {}) => {

    const init = () => {
        return JSON.parse( localStorage.getItem('todos')) || [];
    }
  
    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init );

    /*  SOLUCIÓN MÍA
    const [ counters , setCounters ] = useState( {
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done).length
    } )

     useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
        setCounters( {
            ...counters,
            todosCount: todos.length,
            pendingTodosCount: todos.filter( todo => !todo.done).length
            }
        )
     }, [todos,counters]);
     */

     useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
     }, [todos]);

     const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo

        }
        
        dispatch( action );
     }

     const handleDeleteTodo = ( id ) => {
        //console.log( { id } );
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }
        
        dispatch( action );
     }

     const handleToggleTodo = ( id ) => {
        const action = {
            type: '[TODO] Done Todo',
            payload: id
        }
        
        dispatch( action );
     }

     /*SOLUCIÖN PROFE */
     return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }

    /*
    SOLUCIÖN MÍA 
    return {
        ...counters,
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }*/
      
    
}
     

    

