import React from 'react';

function Footer(){
  return (
    <footer id="footer">
        <p style={{textAlign: "left"}}>
          <a className='about-link' href="">Top of Page</a>
        </p>
        <p>@2023 Redux React-or LLC</p>
        <p>All Rights Reserved</p>
        <p>Created by: Matthew Phillips</p>
        <a id='about-link' href='https://github.com/SoraEagle'>My GitHub</a>
        <a id='about-link' href='https://www.linkedin.com/in/matthew-phillips-754a89168/'>My LinkedIn profile</a>
    </footer>
  )
}

export default Footer;