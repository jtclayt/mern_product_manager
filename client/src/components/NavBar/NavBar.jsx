import React, {useEffect} from 'react';
import NavBarView from './NavBarView/NavBarView';

const NavBar = ({currentPage}) => {
  useEffect(() => {
    const activeLink = document.querySelector('.active');
    const newActiveLink = document.getElementById(currentPage)
    if (activeLink) {
      activeLink.classList.remove('active');
    }
    if (newActiveLink) {
      newActiveLink.classList.add('active');
    }
  })

  return <NavBarView />;
}

export default NavBar;
