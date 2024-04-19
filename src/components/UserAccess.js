import React, { useState } from 'react'
import AccessPoint from './AccessPoint';
import Register from './Register';



function UserAccess() {

    const [isMember, setIsMember] = useState(true);

    // change isMemeber varriable to the oposite value
    function handleClick(e) {
        e.preventDefault();
        setIsMember(!isMember);
    }
    function externalToggle() {
        setIsMember(true);
    }


    return (
        <div>
            <button onClick={handleClick} disabled={isMember}>Log In</button>
            <button onClick={handleClick} disabled={!isMember}>Register</button>

            {isMember ? <AccessPoint /> : <Register externalToggle={externalToggle} />}

        </div>
    )




}
export default UserAccess;