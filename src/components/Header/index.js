import React from 'react';
import {A,NavBar, NavBarLink, NavBarGroup} from './style'
const Header = () =>{
    return (
        <NavBar>
            <NavBarGroup>
                <NavBarLink>
                    <A href='#'>Home</A>
                </NavBarLink>
                <NavBarLink>
                    <A href='#'>Features</A>
                </NavBarLink>
                <NavBarLink>
                    <A href='#'>About</A>
                </NavBarLink>
            </NavBarGroup>
        </NavBar>
    );
}
export default Header;