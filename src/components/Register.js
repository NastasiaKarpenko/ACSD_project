import axios from 'axios';
import React, { useState } from 'react'

function Register(prop) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("Register a new account");

    function handleUserName(e) {
        e.preventDefault();
        setUserName(e.target.value);
    }
    function handlePassword(e) {
        e.preventDefault();
        setPassword(e.target.value);
    }
    function handleEmail(e) {
        e.preventDefault();
        setEmail(e.target.value);
    }
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let sendData = await axios.post(`http://localhost:8000/api/user/`, {
                name: userName,
                email: email,
                password: password

            });
            console.log("User created successfully:", sendData.data);
            setMessage("");
            prop.handleClick();

        } catch { }
    }

    return (
        <div>
            <h3>{message}</h3>
            <h5>Enter user name:</h5>
            <input value={userName} onChange={handleUserName}></input>
            <h5>Enter email:</h5>
            <input value={email} onChange={handleEmail}></input>
            <h5>Enter password:</h5>
            <input type='password' value={password} onChange={handlePassword}></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Register;