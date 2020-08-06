import React, { Component } from "react";
import Rules from "./components/Rules";

const weapons = ["rock", "paper", "scissors"];
class App extends Component {
  state = {
    playerWeapon: [],
    computerWeapon: [],
    outcome: [],
  };

  startGame = (e) => {
    const playerWeapon = e.target.id;
    const computerWeapon = weapons[Math.floor(Math.random() * weapons.length)];
    const outcome = this.outcome(playerWeapon, computerWeapon);
    this.setState({
      playerWeapon: playerWeapon,
      computerWeapon: computerWeapon,
      outcome: outcome,
    });
  };

  outcome = (playerWeapon, computerWeapon) => {
    if (playerWeapon == computerWeapon) {
      return "Stalemate, draw";
    }

    if (
      (playerWeapon == "rock" && computerWeapon == "scissors") ||
      (playerWeapon == "paper" && computerWeapon == "rock") ||
      (playerWeapon == "scissors" && computerWeapon == "paper")
    ) {
      return "Player is victorious";
    } else {
      return "Whipped by a computer";
    }
  };

  render() {
    return (
      <div>
        <h1 id="title">Rock.Paper.Scissors</h1>
        <Rules />
        <button onClick={this.startGame.bind(this)}>
          {" "}
          <img id="rock" src={require("./assets/rock.png")} alt="rock" />{" "}
        </button>
        <button onClick={this.startGame.bind(this)}>
          {" "}
          <img
            id="paper"
            src={require("./assets/paper.png")}
            alt="paper"
          />{" "}
        </button>
        <button onClick={this.startGame.bind(this)}>
          {" "}
          <img
            id="scissors"
            src={require("./assets/scissors.png")}
            alt="scissors"
          />{" "}
        </button>
        <p>
          <strong>Choose your weapon!</strong> <br /> <br />
        </p>
        <div>
          <h3>
            Player unleashed <i>{this.state.playerWeapon}</i> and computer armed <i>{this.state.computerWeapon}</i>
          </h3>
          <h2 id="outcome">{this.state.outcome}</h2>
        </div>
      </div>
    );
  }
}

export default App;
