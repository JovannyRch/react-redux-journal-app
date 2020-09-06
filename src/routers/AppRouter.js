import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { firebase } from "./../firebase/firebase.config";

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [isLogged, setIsLogged] = useState(false);
    const [checking, setChecking] = useState(true);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLogged(true);
            } else {
                setIsLogged(false);
            }

            setChecking(false);
        })
    }, [dispatch, isLogged, checking]);

    if (checking) {
        return (<h2>Loading...</h2>);
    }

    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path="/auth"
                        component={AuthRouter}
                    />

                    <Route
                        exact
                        path="/"
                        component={JournalScreen}
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
