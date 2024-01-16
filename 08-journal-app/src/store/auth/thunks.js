import { GoogleAuthProvider } from "firebase/auth";
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"
import { clearNotesLogout } from "../journal/journalSlice";


export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {

        dispatch ( checkingCredentials() );
    }
}


export const startGoogleSignIn = ( ) => {
    return async( dispatch ) => {

        dispatch ( checkingCredentials() );

        const result = await signInWithGoogle();
        
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        // delete login.ok para borrar la propiedad ok.
        dispatch( login( result ) )
    }
}

export const startCreatingUserWithEmailPassword = ( { email , password, displayName }) => {

    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const { ok, uid, photoUrl, errorMessage } = await registerUserWithEmailPassword( { email , password, displayName });

        if(!ok) return dispatch( logout( { errorMessage } ));

        dispatch( login( { uid, displayName, email, photoUrl }));

    }
}

export const startLoginWithEmailPassword = ( { email , password } ) => {
    
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const { ok, uid, photoUrl, errorMessage } = await loginWithEmailPassword( { email , password });

        if(!ok) return dispatch( logout( { errorMessage } ));

        dispatch( login( { uid, email, photoUrl }));

    }
}

export const startLogout = () => {

    return async( dispatch ) => {

        await logoutFirebase();

        dispatch( clearNotesLogout() );
        dispatch( logout() );
    }
}