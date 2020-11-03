import React from 'react'

class Header extends React.Component{
    render(){
        return(
            <header>
                <nav>
                    <ul>
                    <li><a href='#home'>HOME</a></li>
                    <li><a href='#about'>ABOUT</a></li> 
                    <li><a href='#projects'>PROJECTS</a></li>
                    <li><a href='#contact'>CONTACT</a></li>
                    </ul>
                </nav>
            </header>
        )
        }
}
export default Header