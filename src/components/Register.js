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
            // providing data as x-www-form-urlencoded as requested by the backend, using a URL creator and constructing the address
            const formData = new URLSearchParams();
            formData.append('name', userName);
            formData.append('email', email);
            formData.append('password', password);
            // API request 
            const response = await axios.post('http://localhost:8000/api/user/', formData, {
                // specify the format the data is provided to the backend
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            console.log("User created successfully:", response.data);
            setMessage("");
            alert("Registration successfull, you can log in now!")
            prop.externalToggle();

        } catch (error) {
            console.log("checkpoint" + error)

            if (error.response.status === 500) {
                console.error('An error occurred:', error.response.data);
                setMessage("Email address already exist");
            } else {
                console.error('An error occurred:', error.response.data);
                setMessage("Please try again later");
            }
        }
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