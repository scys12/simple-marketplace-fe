import React from 'react';
import {A,NavBar, NavBarLink, NavBarGroup} from './style'
const Header = () =>{
    return (
        <NavBar>
            <NavBarGroup>
                <NavBarLink>
                    <A href='/login'>Login</A>
                </NavBarLink>
                <NavBarLink>
                    <A href='/register'>Register</A>
                </NavBarLink>
                <NavBarLink>
                    <A href='/about'>About</A>
                </NavBarLink>
            </NavBarGroup>
        </NavBar>
    );
}
export default Header;