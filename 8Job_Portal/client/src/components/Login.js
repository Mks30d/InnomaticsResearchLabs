import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Register from './Register';
import AllJobs from './AllJobs';
import "./Register.css"



function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loggedIn, setLoggedIn] = useState();


    function emailFunc(event) {
        return (setEmail(event.target.value))
    }
    function passwordFunc(event) {
        setPassword(event.target.value)
    }

    const url = "http://localhost:5000/login"

    function handleLogin(event) {
        event.preventDefault();

        const data = {
            email: email,
            password: password,
        };

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log("Success:", data);
                console.log("data.success: ", data.success);

                if (data.success == true) {
                    console.log("Successfully login");
                    setEmail("");
                    setPassword("");
                    setLoggedIn(true);
                }
                else{
                    console.log("Invalid");
                    setLoggedIn(false);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    return (
        <>
            <div>
                <h1>LOGIN</h1>
            </div>
            <div id='container'>
                <form>

                    <input
                        type="email"
                        name="email"
                        onChange={emailFunc}
                        value={email}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        name="password"
                        onChange={passwordFunc}
                        value={password}
                        placeholder="Password"
                    />
                    <button type="submit" onClick={handleLogin}>LOGIN</button>

                </form>
            </div>

            <div>
                <div>
                    Don't have an account?
                    <span ><Link to='/register' >Register</Link></span>
                </div>

            </div>

            {/* { loggedIn && <AllJobs /> } */}

            {
            (() => {
                if (loggedIn) {
                    // return <AllJobs />;
                    // setLoggedIn(false)
                    return (
                        <h2>Success</h2>
                        // alert("Success"),
                        )
                    } else {
                        return null;
                }
            })
            ()}

        </>
    );
}

export default Login;