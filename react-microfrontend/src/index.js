import React from 'react';
import ReactDOM from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import GridComponent from './components/GridComponent';
import DropdownComponent from './components/DropdownComponent';
import App from './App';
import './index.css';

const GridElement = reactToWebComponent(GridComponent, React, ReactDOM);
const DropdownElement = reactToWebComponent(DropdownComponent, React, ReactDOM);
customElements.define('react-grid', GridElement);
customElements.define('react-dropdown', DropdownElement);

//below code for run and test react component in react separate
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);