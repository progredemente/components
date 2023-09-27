import React, {Component} from 'react';
import './AppsBar.css';
import appList from './appList';


class AppsBar extends Component{

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='apps-bar-container'>
        <div className='apps-bar'>
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
