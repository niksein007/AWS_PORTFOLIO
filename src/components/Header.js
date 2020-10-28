import react from 'react'

class Header extends react.Component{
    render(){
        return(
            <header>
                <nav>
                    <a href='#'>HOME</a>
                    <a href='#'>ABOUT</a>
                    <a href='#'>PROJECTS</a>
                    <a href='#'>CONTACT</a>
                </nav>
            </header>
        )
        }
}
export default Header