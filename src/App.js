import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './page/home/Home'
import A from './a'






function App() {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <Switch>
            <Route path='/' exact component={Home} />
            <A />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
