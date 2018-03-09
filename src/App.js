import React, { Component } from 'react';
import './App.css';
import content from './cards';

class App extends Component {
  handleClick = (t) => {
    window.location.href = t; 
  }

  render() {
    return (
        <div className="h-100 bg d-flex justify-content-center">
          <div className="row justify-content-center align-self-center">
            {content.map((c, k) => {
                return <div key={k} className="card text-white mb-3 app-card clickable" onClick={() => this.handleClick(c.url)}>
                  <div className="p-3 d-flex flex-row align-items-center">
                    <img src={c.img} className="card-img"/>
                    <div className="p-3">{c.title}</div>
                  </div>
                </div>
            })}
          </div>
        </div> 
    );
  }
}

export default App;
