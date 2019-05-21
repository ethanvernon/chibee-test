import React from 'react';
import logo from './logo.svg';
import './App.css';

const time = new Date().toLocaleString();

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
          <h2 className="header">POPULAR ON R/JAVASCRIPT</h2>
        </section>

        <section className="javascript">
          <h2 className="header">RELEVANT JAVASCRIPT HISTORY</h2>
          <div className="time">
          {time}
          </div>
        </section>

        <section className="github">
          <h2 className="header">GITHUB ISSUES HISTORY</h2>
        <div className="adv">
        </div>
        </section>


      </div>
    );
  }
}

export default App;
