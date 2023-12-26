import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom/client';
import AppsBar from "./AppsBar";


class _AppsBar extends Component{

    constructor(props){
        super(props);
        this.ref = createRef();
    }

    componentDidMount() {
        this.props.vueFn(this.ref.current);
    }

    render() {
        return(
            <AppsBar
                current={this.props.current}
            >
                <div ref={this.ref}></div>
            </AppsBar>
        )
    }
}

function appsBarForVue(el, current, vueFn) {
    ReactDOM.createRoot(el).render(
        <_AppsBar current={current} vueFn={vueFn}/>
    )
}

export default appsBarForVue;
