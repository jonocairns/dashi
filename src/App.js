import React, { Component } from 'react';
import './App.css';
import content from './cards';

class App extends Component {
  render() {
    return (
        <div className="h-100 bg d-flex justify-content-center p-4">
          <div className="row justify-content-center align-self-center">
            {content.map((c, k) => {
                const isMail = c.url.indexOf('mailto:') > -1;

                return <a href={c.url} key={k} target={isMail ? '': '_blank'} className="link"><div className="text-white mb-3 app-card">
                  <div className="p-3 d-flex flex-row align-items-center">
                    <img src={c.img} alt={c.title} className="card-img"/>
                    <div className="ml-1 text-uppercase" style={{fontFamily: 'Oswald, serif', fontSize: 22}}>{c.title}</div>
                  </div>
                </div></a>
            })}
          </div>
        </div> 
    );
  }
}

export default App;
