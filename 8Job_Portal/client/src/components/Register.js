import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Register.css"



function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function nameFunc(event) {
        // console.log(event.target.value);
        return (
            setName(event.target.value))
        // console.log("name: ", name);
    }
    function emailFunc(event) {
        return (setEmail(event.target.value))
    }
    function passwordFunc(event) {
        setPassword(event.target.value)
    }


    const url = "http://localhost:5000/register"

    function handleRegister(event) {
        console.log(event.target.value);
        event.preventDefault();

        const data = {
            name: name,
            email: email,
            password: password,
        };

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setName("");
                setEmail("");
                setPassword("");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    return (
        <>
            <div id='container'>
                <h1>Register</h1>

                <div>
                    {/* <form>
                        <input
                            type="text"
                            name="name"
                            onChange={nameFunc}
                            value={name}
                            placeholder="Name"
                        />
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
                        <button type="submit" onClick={handleRegister}>REGISTER</button>

                    </form> */}
                    <form>
                        <input
                            type='text'
                            name='name'
                            onChange={nameFunc}
                            value={name}
                            placeholder='Name'
                        />
                        <input
                            type='email'
                            name='email'
                            onChange={emailFunc}
                            value={email}
                            placeholder='Email'
                        />
                        <input
                            type='password'
                            name='password'
                            onChange={passwordFunc}
                            value={password}
                            placeholder='Password'
                        />
                        <button type='submit' onClick={handleRegister}>
                            REGISTER
                        </button>
                    </form>

                    <div>
                        <div className='link'>
                            Already have an account?{' '}
                            <span>
                                <Link to='/login'>Login</Link>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;