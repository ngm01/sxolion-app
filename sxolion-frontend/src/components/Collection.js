import React from 'react';

class Collection extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collection: {}
        }
    }

    componentDidMount(){
        let collectionId = this.props.match.params.id;
        fetch(`http://localhost:5000/api/collections/${collectionId}`).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data);
            this.setState({collection: data.collection})
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.collection.title}</h1>
                <div class="qrCode" dangerouslySetInnerHTML={{ __html: this.state.collection.qrCode }}></div>
            </div>
        )
    }
}

export default Collection;