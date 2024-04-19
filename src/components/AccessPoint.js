import axios from 'axios';
import React, { useEffect, useState } from 'react'
import md5 from "md5";
import { Link } from 'react-router-dom';



function AccessPoint() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accountData, setAccountData] = useState([]);
    const [error, setError] = useState();
    const [isLogIn, setIsLogin] = useState(false);
    const [accessMessage, setAccessMessage] = useState("")

    useEffect(() => {
        if (password && accountData) {
            verifyAccess();
        }
    }, [accountData]);
    function handleEmail(e) {
        e.preventDefault();
        setEmail(e.target.value);

    }
    function handlePassword(e) {
        e.preventDefault();
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
            setError("There is a problem retriving the data, try again later");
        }

    }
    function verifyAccess() {
        console.log(password);
        const hash = md5(password);
        console.log(hash);
        console.log(accountData.password);

        if (accountData.password === hash) {
            console.log("Log in succsesfully");
            setAccessMessage("welcome back " + accountData.name);
            setIsLogin(true);
            setError("");
            // Ideally it would be best to store a JWT token so the data is not exposed and accessible
            localStorage.setItem("user", JSON.stringify(accountData.id));
        } else {
            console.log("not match");
            setError("Email address or password not matching");
            setIsLogin(false);

        }
    }

    if (isLogIn) {
        return (
            <div>
                <h3>{accessMessage}</h3>
                <Link to="/Basket"><button >Continue to basket</button></Link>
                <Link to="/Catalog"><button>Continue shopping</button></Link>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Log In</h3>
                <h4>{error}</h4>
                <form>
                    <h4>User name:</h4>
                    <input type="text" value={email} placeholder='Enter email' onChange={handleEmail} />
                    <h4>Enter password:</h4>
                    <input type="password" value={password} placeholder='Password' onChange={handlePassword} />
                    <button onClick={getAccount}  >
                        Log in
                    </button>
                </form>
            </div>
        )
    }

}
export default AccessPoint;