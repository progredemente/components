import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Icon from './Icon';

const mount = (el) => {
    const root = ReactDOM.createRoot(el);
    root.render(
      <React.StrictMode>
        <Icon icon="F"/>
      </React.StrictMode>
    );
}
if(process.env.NODE_ENV === 'development') {
    const root = document.getElementById('_components-root');
    if(root) {
        mount(root);
    }
}

export { Icon }