import React, {Component, createRef} from 'react';
import './AppsBar.css';
import appList from './appList';


class AppsBar extends Component{

  constructor(props) {
    super(props);
    this.ref = createRef();
  }

  componentDidMount() {
    const scroll = JSON.parse(sessionStorage.getItem('apps-bar-scroll') || '{"top": 0, "left": 0}');
    this.ref.current.scrollTop = scroll.top;
    this.ref.current.scrollLeft = scroll.left;
    this.ref.current.onscroll = (event) => {
      sessionStorage.setItem('apps-bar-scroll', JSON.stringify({top: event.target.scrollTop, left: event.target.scrollLeft}));
    }
  }

  render() {
    return (
      <div className='apps-bar-container'>
        <div className='apps-bar' ref={this.ref}>
          <a className='apps-bar-app apps-bar-home' href='/labs'>
            <img src={`${process.env.RESOURCES_URL}/labs_home.png`}/>
            <span>progredemente labs</span>
          </a>
          {
            Object.keys(appList).map((k) => {
              return (
                <a key={k} className={`apps-bar-app${this.props.current === k ? ' current' : ''}`} href={`/${k}`}>
                  <img src={`${process.env.RESOURCES_URL}/${appList[k].img}`}/>
                  <span>{appList[k].name}</span>
                </a>
              );
            })
          }
        </div>
        <div className='apps-bar-page'>
          {this.props.children}
        </div>
      </div>
    )
  };
}

export default AppsBar;
