import React from 'react';

class CreateCollection extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            newItem: "",
            collection: {
                userId: this.props.userId,
                title: "",
                description: "",
                canViewFlag: "PUBLIC",
                items: []
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleChange(e){
        //console.log(e.target.name, ":", e.target.value)
        if(e.target.name === 'item'){
            this.setState({newItem: e.target.value})
        } else {
            let collection = this.state.collection;
            collection[e.target.name] = e.target.value;
            this.setState({collection});
        }
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.collection)
        fetch('http://localhost:5000/api/collections/', {
            method: "POST",
            body: JSON.stringify(this.state.collection),
            headers: {
                'Content-Type': 'application/json'
              },
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data);
        })
    }

    addItem(e){
        e.preventDefault();
        let collection = this.state.collection;
        collection.items.push(this.state.newItem);
        this.setState({collection})
    }

    render(){
        // TODO: React form
        return (
            <div>
                <h2>Create a new collection.</h2>
                <div id="itemsList">
                    <ul>
                        {
                            this.state.collection.items.map((item, i) => {
                                return <li key={i}>{item}</li>
                            })
                        }
                    </ul>
                </div>
                <form onSubmit={this.addItem}>
                    <label>
                        Add Items:
                        <input type="text" name="item" 
                        value={this.state.newItem} 
                        onChange={this.handleChange} />
                        <input type="submit" value="Add Item" />
                    </label>
                </form>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input name="title" type="text" 
                        value={this.state.collection.title} 
                        onChange={this.handleChange} />
                    </label>
                    <label>
                        Description:
                        <textarea name='description' 
                        value={this.state.collection.description}
                        onChange={this.handleChange} />
                    </label>
                    <label>
                        Access Priveleges:
                        <select name="canViewFlag" value={this.state.collection.canViewFlag}
                        onChange={this.handleChange}>
                            <option value="PUBLIC">Public (Anyone can view)</option>
                            <option value="PRIVATE">Private (Only I can view)</option>
                            <option value="RESTRICTED">Restricted (Only I and people I invite can view)</option>
                        </select>
                    </label>
                    <input type="submit" value="Create" />
                </form>
            </div>
        )
    }
}

export default CreateCollection;