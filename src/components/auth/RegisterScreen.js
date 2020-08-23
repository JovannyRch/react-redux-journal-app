import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from "validator";

export const RegisterScreen = () => {

    const [formValues, handleInputChange] = useForm({
        name: "Jovanny",
        email: "jovannyrch@gmail.com",
        password: "123",
        password2: "123",
    });
    const handleRegister = (event) => {
        event.preventDefault();
        if (isFormValid()) {
            console.log("Login correcto");
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            return false;
        }
        if (validator.isEmail(email)) {

            return false;
        }

        if (password !== password2) {
            return false;
        }

        return true;
    }

    const { name, email, password, password2 } = formValues;
    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister} >

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
