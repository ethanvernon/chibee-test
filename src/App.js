import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import Message from './Message.js';
import Reddit from './Reddit.js';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     time: 23
  //   };
  // }

  render() {
    return (
      <div className="App">
        <section className="navi">
          <ul>
            <li><a href="#">SETTINGS</a></li>
            <li><a href="#">GISTS</a></li>
            <li><a href="#">STACK OVERFLOW</a></li>
            <li><a href="#">TRENDING</a></li>
            <li><a href="#">SCRATCH PAD</a></li>
            <li><a href="#">PLAYGROUND</a></li>
            <li><a href="#">HELP/INTRO</a></li>
          </ul>
        </section>

        <section className="reddit">
          <h4 className="header">POPULAR ON R/JAVASCRIPT</h4>
          <Reddit/>
        </section>

        <section className="javascript">
          <h4 className="header">RELEVANT JAVASCRIPT HISTORY</h4>
          <div className="time">
          <Clock/>
          </div>
          <Message/>
        </section>

        <section className="github">
          <h4 className="header">GITHUB ISSUES HISTORY</h4>
        <div className="adv">
        </div>
        </section>


      </div>
    );
  }
}

export default App;
