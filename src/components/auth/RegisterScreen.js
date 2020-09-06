import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from "react-redux"
import validator from "validator";
import { removeError, setError } from '../../actions/ui';
import { starRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { msg } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: "Jovanny",
        email: "jovannyrch@gmail.com",
        password: "123qwe",
        password2: "123qwe",
    });
    const handleRegister = (event) => {
        event.preventDefault();
        if (isFormValid()) {
            dispatch(starRegisterWithEmailPasswordName(email, name, password));
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError("Name is required"));
            return false;
        }
        if (!validator.isEmail(email)) {
            dispatch(setError("Valid email is required"));
            return false;
        }

        if (password !== password2) {
            dispatch(setError("Both passwords have to be equal"));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    const { name, email, password, password2 } = formValues;
    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister} >

                {
                    msg &&
                    <div className="auth__alert-error">
                        {msg}
                    </div>
                }

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    className="auth__input"
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                    className="auth__input"
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>



                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
