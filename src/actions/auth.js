import { types } from "../types/types"
import { firebase, googleAuthProvider } from "./../firebase/firebase.config"
export const startLoginWithPassword = (email, password) => {

    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, "jovas 2"));
        }, 500);
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