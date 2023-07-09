import React from 'react';

function Logout() {
    const handleLogout = () => {
        document.cookie = "myCookie=" + null;
    };
 
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
export default Logout;