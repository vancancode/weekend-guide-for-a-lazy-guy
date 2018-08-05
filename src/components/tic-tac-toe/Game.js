import React from 'react';
import Board from './Board';
import './tictactoe.css';
import { calculateWinner } from './Helpers';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  restartGame(winner) {
    if (winner) {
      this.reset();
    } else {
      alert('Sorry, You cannot restart an ongoing game');
    }
  }

  reset() {
    this.setState({
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    });
  }

  handleClick(i) {
    // const history = this.state.history;
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    // const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    console.log(winner);

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status, banner, draw;
    if (winner) {
      status = 'Winner: ' + winner;
      banner = <div className="game-won">{winner} WON!!!</div>;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    if (!winner && moves.length > 9) {
      draw = (
        <div
          className="btn btn-primary game-status game-won"
          onClick={() => this.reset()}
        >
          Draw, would you like to restart?
        </div>
      );
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div
            className="btn btn-primary game-status"
            onClick={() => this.restartGame(winner)}
          >
            {status}
          </div>
          <ol>{moves}</ol>
          {banner}
          {draw}
        </div>
      </div>
    );
  }
}

export default Game;
