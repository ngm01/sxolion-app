import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import Collection from './components/Collection';
import CreateCollection from './components/CreateCollection'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      userId: "5df66a90c892f7461fb1bebc"
    }
  }
  render(){
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/createCollection" 
          render={(props)=> <CreateCollection {...props} userId={this.state.userId} />} />
        <Route path="/collection/:id" 
          render={(props)=> <Collection {...props} userId={this.state.userId} />} />
      </div>
    );
  }

}

export default App;
