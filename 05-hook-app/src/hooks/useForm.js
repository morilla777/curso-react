import { useState } from "react"


//https://react-hook-form.com/
//npm install react-hook-form

export const useForm = ( initialForm = {}) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ( { target } ) => {
       const { name, value } = target;
       setFormState({
            ...formState,
            [ name ]: value
       });
    }

    const onResetForm = ( ) => {
        setFormState( initialForm);
     }

    return {
        formState,
        ...formState,
        onInputChange,
        onResetForm,
    }
}
