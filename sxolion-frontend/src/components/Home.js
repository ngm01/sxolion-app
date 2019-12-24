import React from 'react';
import Navbar from './Navbar';
import CollectionPreview from './CollectionPreview';
import {Link} from 'react-router-dom';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            collections: []
        }
    }

    componentDidMount(){
        fetch(`http://localhost:5000/api/collections/`).then((response)=>{
            return response.json();
        }).then(data => {
            this.setState({collections: data});
            console.log(this.state.collections)
        })
    }

    strikethrough(evt){
        evt.target.style.textDecoration = "line-through";
    }

    render(){
        
        return (
        <div>
            <div>
            {this.state.collections.map((c) => 
            <Link key={c._id} to={`collection/${c._id}`} >
                <CollectionPreview title={c.title} description={c.description} />
            </Link>
            )}
            </div>
            <h1>TODO:</h1>
            <ol>
                <li onClick={(e)=>{this.strikethrough(e)}}>Implement Router</li>
                <li onClick={(e)=>{this.strikethrough(e)}}>Collection Previews should be wrapped in links to the Collection view proper</li>
                <li onClick={(e)=>{this.strikethrough(e)}}>Create a "Create New Collection" Form Component</li>
                <li onClick={(e)=>{this.strikethrough(e)}}>Link to that "Create New Collection" goes in NavBar</li>
                <li onClick={(e)=>{this.strikethrough(e)}}>Update QR code on backend to produce object with attributes</li>
            </ol>
        </div>
        )
    }

}

export default Home;