import React from 'react';

class CreateCollection extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items: [],

        }
    }

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        // TODO: React form
        return (
            <div>
                
            </div>
        )
    }
}

export default CreateCollection;