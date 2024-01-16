import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
//import { checkingCredentials } from "../../store/auth/authSlice";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks";
import { useEffect, useMemo, useState } from "react";
import { isEmpty } from "../../utils";

const formData = {
  email: '',
  password: '',
}

const formValidations = {
  email: [ ( value ) => value.includes('@'), 'El correo debe tener un @.'],
  password: [ ( value ) => value.length >= 6 , 'El correo debe tener más de 6 caracteres.'],
}


export const LoginPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emptyErrorMessage,setEmptyErrorMessage] = useState(true)

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  useEffect( () => {
      setEmptyErrorMessage(isEmpty(errorMessage));
  },[errorMessage])

  const { formState, email, password, onInputChange,  
          isFormValid, emailValid, passwordValid,
  } = useForm( formData, formValidations );


  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted( true );

    if( !isFormValid ) return;
    
    dispatch ( startLoginWithEmailPassword( formState) );
  }

  const onGoogleSignIn = (  ) => {
    console.log('onGoogleSignIn');
    dispatch( startGoogleSignIn() );
  }

  return (
    
    <AuthLayout title="Login">

          <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>

              <Grid container>
                <Grid item xs={ 12 } sx={{ mt:2 }}>
                  <TextField 
                    label="Correo" 
                    type="email" 
                    placeholder="correo@gmail.com" 
                    fullWidth
                    name="email"
                    value={ email }
                    onChange={ onInputChange }
                    error={ !!emailValid && formSubmitted }
                    helperText={ emailValid }
                  />
                </Grid>

                <Grid item xs={ 12 } sx={{ mt:2 }}>
                  <TextField 
                    label="Contraseña" 
                    type="password" 
                    placeholder="Contraseña" 
                    fullWidth
                    name="password"
                    value={ password }
                    onChange={ onInputChange }
                    error={ !!passwordValid && formSubmitted }
                    helperText={ passwordValid }
                  />
                </Grid>

                <Grid container spacing={ 2 } sx={ { mb:2, mt: 1 } }>

                <Grid 
                    item 
                    xs={ 12 }
                    display={ !emptyErrorMessage ?'':'none' }
                  >
                    <Alert severity='error'>{ errorMessage }</Alert>
                  </Grid>

                  <Grid item xs={ 12 } sm={ 6 }>
                    <Button
                      disabled={ isCheckingAuthentication }
                      type="submit" 
                      variant="contained" 
                      fullWidth>
                      Login
                    </Button>
                  </Grid>
                  <Grid item xs={ 12 } sm={ 6 }>
                    <Button 
                      disabled={ isCheckingAuthentication }
                      variant="contained" 
                      fullWidth
                      onClick={ onGoogleSignIn }>
                      <Google />
                      <Typography sx={{ ml: 1}}>Google</Typography>
                    </Button>
                  </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='end'>
                  <Link component={ RouterLink } color='inherit' to='/auth/register'>
                    Crear una cuenta
                  </Link>
                  
                </Grid>

              </Grid>


          </form>

      </AuthLayout>

      
  )
}
