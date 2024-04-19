import axios from 'axios';
import React, { useEffect, useState } from 'react';
import md5 from "md5";
import { Link } from 'react-router-dom';

function AccessPoint() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accountData, setAccountData] = useState([]);
    const [error, setError] = useState("");
    const [isLogIn, setIsLogin] = useState(false);
    const [accessMessage, setAccessMessage] = useState("");

    useEffect(() => {
        if (password && accountData) {
            verifyAccess();
        }
    }, [accountData]);

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    async function getAccount(e) {
        e.preventDefault();
        try {
            let response = await axios.get(`http://localhost:8000/api/user/${email}`);

            if (response.data.data) {
                setAccountData(response.data.data);
            } else {
                setError("User not found");
            }
        } catch (error) {
            setError("There is a problem retrieving the data, try again later");
        }
    }

    function verifyAccess() {
        const hash = md5(password);

        if (accountData.password === hash) {
            setAccessMessage("Welcome back " + accountData.name);
            setIsLogin(true);
            setError("");
            localStorage.setItem("user", JSON.stringify(accountData.id));
        } else {
            setError("Email address or password not matching");
            setIsLogin(false);
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {isLogIn ? (
                        <div className="card">
                            <div className="card-body">
                                <h3>{accessMessage}</h3>
                                <Link to="/Basket" className="btn btn-primary">Continue to basket</Link>
                                <Link to="/Catalog" className="btn btn-secondary ms-2">Continue shopping</Link>
                            </div>
                        </div>
                    ) : (
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Log In</h3>
                                <h4>{error}</h4>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address:</label>
                                        <input type="email" className="form-control" id="email" value={email} onChange={handleEmail} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password:</label>
                                        <input type="password" className="form-control" id="password" value={password} onChange={handlePassword} />
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={getAccount}>Log in</button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AccessPoint;
