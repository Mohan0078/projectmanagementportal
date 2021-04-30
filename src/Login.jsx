import React, { useState } from 'react';
import axios from 'axios';
import base_url from './api/bootApi';
import GoogleLogin from 'react-google-login';

const Login = () => {

    // setting the localStorage for login credentials
    // ReactSession.setStoreType("localStorage");

    const [person, setPerson] = useState({});

    const login = (event) => {
        event.preventDefault();
        // write login logic here
        console.log("Value login => " + event.target.value);

        initiateLogin(person);
    }

    // login the user
    const initiateLogin = (data) => {
        console.log(data.personEmail);
        if (data === null || data.personEmail === "" || data.password === "") {
            return;
        }

        axios.post(`${base_url}/login`, data).then(
            (response) => {
                console.log(response);
                if (response.data !== null && response.data !== "") {
                    //    ReactSession.set("hasLogin", "yes"); 
                    localStorage.setItem("hasLogin", "yes");
                    localStorage.setItem("person", response.data);

                    if (response.data.personEmail === "admin@gmail.com" && response.data.password === "xz7udknt@#xy") {
                        localStorage.setItem("isAdmin", "true");
                    }

                    console.log("data => ");
                    console.log(response.data);
                    // showHome('block');
                    window.location = "/";
                }
                console.log("Success Logged In");
            }, (error) => {
                console.log(error);
                console.log("error Login failed");
            }
        );
    }

    const goBack = (event) => {
        // console.log("Value => " + event.target.value);
        // showHome('Home');
        window.location = '/';
    }

    // for login with Google
    const loginWithGoogle = (event) => {
        event.preventDefault();

        axios.get(`${base_url}/loginWithGoogle`).then(
            (response) => {
                console.log(response);
                if (response.data !== null && response.data !== "") {

                    if (response.data === "Toseethistextyouneedtobeloggedin!") {
                        localStorage.setItem("hasLogin", "yes");
                    }

                    console.log("Login with Google => ");
                    console.log(response.data);
                    window.location = "/";
                }
                console.log("Success Google Logged In");
            }, (error) => {
                console.log(error);
                console.log("error Login failed");
            }
        );

    }

    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
    }

    return (
        <>
            <div className="col-md-5 mt-4">
                <div className="card text-center">
                    <form className="card">

                        <div className="form-group mt-3">
                            <h1 className="text-center">Login</h1>
                            <input type="email" name="personEmail" onChange={(e) => { setPerson({ ...person, personEmail: e.target.value }) }} className="elementSize" required placeholder="enter email .." />
                        </div>

                        <div className="form-group mt-3">

                            <input type="password" name="password" onChange={(e) => { setPerson({ ...person, password: e.target.value }) }} className="elementSize" required placeholder="enter password .." />

                        </div>

                        <div className="container mt-4 mb-3">

                            <input type="submit" value="login" onClick={login} className="btn btn-primary" />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <input type="submit" value="cancel" onClick={goBack} className="btn btn-danger" />

                        </div>

                    </form>


                </div>

                <div className="card mt-3 text-center" role="button" onClick={loginWithGoogle}>

                    <GoogleLogin
                        clientId="32887172888-65kv5f6ivcbfvmdmgqjta2rl6ir0a7es.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}

                    />

                </div>
            </div>



        </>
    )
}

export default Login;