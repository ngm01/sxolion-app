import React from 'react';

class Navbar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <header className="navbar">
                <a>Home</a>
                <a>Logout</a>
            </header>
        )
    }
}

export default Navbar;