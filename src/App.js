import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import card from "./cards.json";


class App extends Component {
  state = {
    card,
    score: 0,
    highscore: 0
  };

  Count = id => {
    this.state.card.find((o, i) => {
      if (o.id === id) {
        if(card[i].count === 0){
          card[i].count = card[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
          });
          this.state.card.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.endGame();
        }
      }
    });
  }
  
  endGame = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.card.forEach(card => {
      card.count = 0;
    });
    alert(`Sorry, you lost \nYou scored ${this.state.score} points`);
    this.setState({score: 0});
    return true;
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Star Wars Clicky Game</Header>
        {this.state.card.map(card => (
          <Card
            Count={this.Count}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
