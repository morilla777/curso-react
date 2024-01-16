
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useForm } from '../hooks';

export const TodoAdd = ( { addTodo }) => {

    const inputRef = useRef();
    
    const onNewTodo = ( event ) => {
        event.preventDefault();
        const todo = {
            id: new Date().getTime(),
            description: inputRef.current.value,
            done: false
        }

        addTodo( todo );
    }


  return (
    <>
        <form onSubmit={ onNewTodo }>
            <input
                ref={ inputRef }
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
            />

            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    </>
  )
}

TodoAdd.propTypes = {
    addTodo: PropTypes.func,
  };
