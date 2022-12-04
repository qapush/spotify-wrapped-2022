import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
  <React.StrictMode>
      <Switch>
        <Route path="/:id" children={<App />} />
        <Route path="/">
          <App />
        </Route>
      </Switch>
  </React.StrictMode>
</Router>
);
