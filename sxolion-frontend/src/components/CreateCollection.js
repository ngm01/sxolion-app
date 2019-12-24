import React from 'react';

class CreateCollection extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            description: "",
            canViewFlag: "PUBLIC",
            items: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        console.log(this.props.userId)
    }

    handleChange(e){
        console.log(e.target.name);
        switch(e.target.name){
            case 'title':
                this.setState({title: e.target.value})
                break;
            case 'description':
                this.setState({description: e.target.value})
                break;
            case 'canViewFlag':
                this.setState({canViewFlag: e.target.value})
                break;
            default:
                console.log(e.target.name);
        }
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state)
    }

    render(){
        // TODO: React form
        return (
            <div>
                <h2>Create a new collection.</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input name="title" type="text" 
                        value={this.state.title} 
                        onChange={this.handleChange} />
                    </label>
                    <label>
                        Description:
                        <textarea name='description' 
                        value={this.state.description}
                        onChange={this.handleChange} />
                    </label>
                    <label>
                        Access Priveleges:
                        <select name="canViewFlag" value={this.state.canViewFlag}
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