import React from 'react';

function NavBar({setCurrentUser, setErrors}){
    function handleLogoutClick(){
        setErrors(null);

        fetch("logout", {method: "DELETE"}).then((r) => {
            if(r.ok) setCurrentUser(null);
        });
    }
  return (
    <div id="nav">
        <button onClick={handleLogoutClick}>Log Out</button>
    </div>
  )
}

export default NavBar;