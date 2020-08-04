import React, { Component } from 'react';

class App extends Component {
  
  render() {
  return (
    <div>
      <h1 id="title">Rock.Paper.Scissors</h1>
      <img id="rock" src={require('./assets/rock.png')} alt="rock" />
      <img id="paper" src={require('./assets/paper.png')} alt="paper" />
      <img id="scissors" src={require('./assets/scissors.png')} alt="scissors" />
 </div>
  )
 }
}

export default App;