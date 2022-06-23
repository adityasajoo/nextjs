import React from 'react';
import { NavbarStyles } from './styles';

const Navbar = () => {
  const notifications: number = 4; //Change to state later

  return (
    <NavbarStyles>
      <div className='nav-items notifications'>
        <img src='/icons/notification.svg' width={50} height={50} />
        <p className='notification'>{notifications}</p>
      </div>
      <div className='nav-items'>
        <img className='user-icon' src='/user.jpeg' width={45} height={45} />
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
