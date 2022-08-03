import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './Components/Context/user.context';
import { Provider } from 'react-redux'
import store from './ducks/store';
import { HashRouter, BrowserRouter } from 'react-router-dom';
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <Provider store={store} >
            <App />
        </Provider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
