import { types } from "../types/types"
import { firebase, googleAuthProvider } from "./../firebase/firebase.config"
import { startLoading, finishLoading } from "./ui"
export const startLoginWithPassword = (email, password) => {

    return (dispatch) => {
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password).then(async ({ user }) => {
            dispatch(login(user.uid, user.displayName));
        }).catch(e => { console.log("error de login") }).finally(dispatch(finishLoading()));
    }
}
export const starRegisterWithEmailPasswordName = (email, name, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(async ({ user }) => {
            await user.updateProfile({ displayName: name });
            dispatch(login(user.uid, user.displayName));
        });
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.LOGIN,
        payload: { uid, displayName, displayName }
    };
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider).then(({ user }) => { dispatch(login(user.uid, user.displayName)) })
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        logout();
    }
}

export const logout = () => {
    return {
        type: types.LOGOUT
    }
}