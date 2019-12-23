// collection preview for the main page
// This is next step
import React from "react";
class CollectionPreview extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{
                border: '1px solid aquamarine',
                width: '25%',
                padding:'5px',
                margin: '5px'}}>        
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default CollectionPreview;