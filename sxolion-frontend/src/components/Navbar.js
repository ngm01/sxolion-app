import React from 'react';

class Navbar extends React.Component {

    logoutMsg(){
        alert('Login/Auth system coming soon')
    }

    render(){
        return (
            <header className="navbar">
                <h2>
                <a href="/">Sχolion</a></h2>
                <a href="#" onClick={this.logoutMsg}>Logout</a>
                <a href="/createCollection">New Collection</a>
            </header>
        )
    }
}

export default Navbar;