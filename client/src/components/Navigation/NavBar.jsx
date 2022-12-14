import React from 'react';

function NavBar({currentUser, setCurrentUser, setErrors}){
    function handleLogoutClick(){
        setErrors(null);

        fetch("logout", {method: "DELETE"}).then((r) => {
            if(r.ok) setCurrentUser(null);
        });
    }
  return (
    <div id="nav">
      <div>Hello, {currentUser.username}</div>
        <button onClick={handleLogoutClick}>Log Out</button>
    </div>
  )
}

export default NavBar;