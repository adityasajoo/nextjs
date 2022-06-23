import Image from 'next/image';
import React from 'react';
import { NavbarStyles } from './styles';

const Navbar = () => {
  const notifications: number = 4; //Change to state later

  return (
    <NavbarStyles>
      <div className='nav-items notifications'>
        <Image src='/icons/notification.svg' width={50} height={50} />
        <p className='notification'>{notifications}</p>
      </div>
      <div className='nav-items'>
        <Image className='user-icon' src='/user.jpeg' width={45} height={45} />
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
