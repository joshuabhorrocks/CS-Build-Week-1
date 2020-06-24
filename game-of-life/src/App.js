import React, { Component } from 'react';
import './App.css';
import Game from './Game';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="Title">Conway's Game of Life</h1>
                <Game />
                <div className="faq">
                    <h2 className="faq-title">What is Conway's Game of Life?</h2>
                    <h4 className="faq-intro">The Game of Life is a cellular automaton created by the British mathematician John Horton Conway in 1970. The game is simple but can produce fascinating algorithmic creations that simulate the growth of life forms in an entirely synthetic enviroment.</h4>
                    <h4 className="faq-title">There are 4 rules that govern the game:</h4>
                    <h4 className="faq-rules">1. Any live cell with fewer than two live neighbours dies (referred to as underpopulation or exposure).</h4>
                    <h4 className="faq-rules">2. Any live cell with more than three live neighbours dies (referred to as overpopulation or overcrowding).</h4>
                    <h4 className="faq-rules">3. Any live cell with two or three live neighbours lives, unchanged, to the next generation.</h4>
                    <h4 className="faq-lrules">4. Any dead cell with exactly three live neighbours will come to life.</h4>
                    <h4 className="faq-title">Light up a few cells and click run to see the game in action!</h4>
                    <h4 className="faq-hint">Hint: Once the simulation begins, you won't be able to add more cells until you stop and reset it!</h4>
                </div>
                <div className="area" >
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
            </div >
            </div>
        );
    }
}

export default App;