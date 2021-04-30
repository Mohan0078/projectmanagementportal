import React from 'react';

const Logout = () => {
 
    localStorage.setItem("hasLogin", null);
    
    return (
        <>
        </>
    );
}

export default Logout;