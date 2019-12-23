import React from 'react';

class Navbar extends React.Component {
    constructor(props){
        super(props);
    }

    logoutMsg(){
        alert('Login/Auth system coming soon')
    }

    render(){
        return (
            <header className="navbar">
                <h2>
                <a href="/">Sχolion</a></h2>
                <a href="#" onClick={this.logoutMsg}>Logout</a>
            </header>
        )
    }
}

export default Navbar;