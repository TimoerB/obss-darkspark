import React, { Component } from 'react';
import logo from './random.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <a
                        className="App-link"
                        href="https://obss.be"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        OBSS
                    </a>
                </header>
            </div>
        );
    }
}

export default App;