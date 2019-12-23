import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import Collection from './components/Collection'

function App() {

  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/collection/:id" component={Collection} />
    </div>
  );
}

export default App;
