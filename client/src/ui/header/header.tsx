import React, {useState} from 'react';
import logo from '@/image/logo.png';

function Header() {
    return(
        <div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <img src={logo} alt='로고' />
          </div>
        </div>
    )
}

export default Header;