import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './page/home/Home'
import About from './page/about/About'
function App() {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />

          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
