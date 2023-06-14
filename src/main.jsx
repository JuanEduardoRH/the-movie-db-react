import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './views/home';

import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);
