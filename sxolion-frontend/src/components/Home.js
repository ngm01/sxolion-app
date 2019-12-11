import React from 'react';
import Navbar from './Navbar';

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
            this.state.collections = data;
            console.log(this.state.collections);
        })
    }

    render(){
        return (
            <div>
      <Navbar />
      <div>A List of Collections</div>
      <div>A link to create a new collection</div>
      <div>Clicking on a collection gives you a view of that collection</div>
            </div>
        )
    }

}

export default Home;