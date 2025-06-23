import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Icon from './icon/Icon';
import AppsBar from './apps-bar/AppsBar';
import appsBarForVue from './apps-bar/appsBarForVue';
import GIFer from './gifer/GIFer';
import appList from './apps-bar/appList';

const icons = {
    "0x43": 'C',
    "0x44": 'D',
    "0x45": 'E',
    "0x46": 'F',
    "0x270D": "✍",
    "0x2194": "↔",
    "0x21E4": "⇤",
    "0x21E5": "⇥",
    "0x21ba": '↺',
    "0x21bb": '↻',
    "0x2630": '☰',
    "0x263a": '☺',
    "0x2661": '♡',
    "0x2665": '♥',
    "0x2713": '✓',
    "0x1f310": '🌐',
    "0x1f3f3": '🏳',
    "0x1f50d": '🔍',
    "0x1f50e": '🔎',
    "0x1f609": '😉',
    "0x1f642": '🙂',
    "0x1f3c6": '🏆',
}

const mount = (el) => {
    const root = ReactDOM.createRoot(el);
    root.render(
        <React.StrictMode>
            { Object.keys(icons).map(k => {
                return (
                    <span
                        style={{
                            fontSize: '2rem',
                            margin: '1rem',
                            display: 'inline-flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            border: '1px solid black',
                            padding: '1rem'
                        }}
                    >
                        <span>{k} - {icons[k]}</span>
                        <button
                            style={{
                                fontSize: '2rem'
                            }}
                            onClick={() => {
                                navigator.clipboard.writeText(icons[k])
                            }}
                        >
                            <Icon icon={icons[k]}/>
                        </button>
                    </span>
                );
            })}
        </React.StrictMode>
    );
}
if(process.env.NODE_ENV === 'development') {
    const root = document.getElementById('_components-root');
    if(root) {
        mount(root);
    }
}

export { Icon, AppsBar, appsBarForVue, appList, GIFer }
