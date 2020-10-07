import React from 'react';
import {A,NavBar, NavBarLink, NavBarGroup} from './style'
const Header = () =>{
    return (
        <NavBar>
            <NavBarGroup>
                <NavBarLink>
                    <A href='#'>Login</A>
                </NavBarLink>
                <NavBarLink>
                    <A href='#'>Register</A>
                </NavBarLink>
                <NavBarLink>
                    <A href='#'>About</A>
                </NavBarLink>
            </NavBarGroup>
        </NavBar>
    );
}
export default Header;