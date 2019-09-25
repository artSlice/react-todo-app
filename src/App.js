import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About } from './pages/About.js';
import { Home } from './pages/Home.js';
import { Navbar } from './components/Navbar.js';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState.js';

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar /> 
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path={'/'} exact component={Home} />
              <Route path={'/about'} component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}
export default App;
