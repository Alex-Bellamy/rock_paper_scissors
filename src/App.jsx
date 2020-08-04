import React, { Component } from 'react';

class App extends Component {
  
  render() {
  return (
    <div>
      <h1 id="title">Rock.Paper.Scissors</h1>
      <h2 id="sub-title">The rules are simple...</h2>
      <p id="rules-1">1. rock smashes scissors.</p>
      <p id="rules-2">2. scissors slice up paper.</p>
      <p id="rules-3">3. paper smothers rock.</p>
      <img id="rock" src={require('./assets/rock.png')} alt="rock" />
      <img id="paper" src={require('./assets/paper.png')} alt="paper" />
      <img id="scissors" src={require('./assets/scissors.png')} alt="scissors" />
 </div>
  )
 }
}

export default App;