
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useForm } from '../hooks';

export const TodoAddProfe = ( { addTodo }) => {


    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const inputRef = useRef();
    
    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if( description.length <= 1 ) return;

        const todo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        addTodo( todo );
        onResetForm();
    }


  return (
    <>
        <form onSubmit={ onFormSubmit }>
            <input
                ref={ inputRef }
                type="text"
                placeholder="¿Qué hay que hacer?"
                name="description"
                value={ description }
                onChange={ onInputChange }
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

TodoAddProfe.propTypes = {
    addTodo: PropTypes.func,
  };
