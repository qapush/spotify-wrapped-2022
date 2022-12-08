import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
<React.StrictMode>
  <Router basename='spotify-wrapped-2022' hashType='noslash'>
      <Switch>
        <Route path="/:id" children={<App />} />
        <Route path="/">
          <App />
        </Route>
      </Switch>
  </Router>
</React.StrictMode>
);
