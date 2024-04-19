import React, { useState } from 'react';
import AccessPoint from './AccessPoint';
import Register from './Register';

function UserAccess() {
    const [isMember, setIsMember] = useState(true);

    // change isMember variable to the opposite value
    function handleClick(e) {
        e.preventDefault();
        setIsMember(!isMember);
    }

    function externalToggle() {
        setIsMember(true);
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h5 className="mb-0">User Access</h5>
                        </div>
                        <div className="card-body">
                            <div className="d-grid gap-2">
                                <button className={`btn btn-lg btn-${isMember ? 'primary' : 'secondary'}`} onClick={handleClick} disabled={isMember}>Log In</button>
                                <button className={`btn btn-lg btn-${!isMember ? 'primary' : 'secondary'}`} onClick={handleClick} disabled={!isMember}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    {isMember ? <AccessPoint /> : <Register externalToggle={externalToggle} />}
                </div>
            </div>
        </div>
    );
}

export default UserAccess;
