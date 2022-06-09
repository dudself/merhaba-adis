import React, { Component } from 'react';
import { Board, Tile } from 'react-obf';

import boardSet from './communikate-20.json';

class Example extends Component {
  state = {
    board: boardSet.boards[boardSet.root]
  };

  speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }

  loadBoard = board => {
    this.setState({ board: boardSet.boards[board.id] });
  };

  renderButton(button) {
    return <Tile {...button} />;
  }

  render() {
    return (
      <Board
        board={this.state.board}
        onLoadBoard={this.loadBoard}
        onSpeak={this.speak}
        renderButton={this.renderButton}
      />
    );
  }
}