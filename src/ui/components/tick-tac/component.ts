import Component, { tracked } from '@glimmer/component';

const PLAYER_X = 'X';
const PLAYER_O = 'O';
const WIN_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

class Board {
  cellValues;

  constructor() {
    this.cellValues = [
      undefined, undefined, undefined,
      undefined, undefined, undefined,
      undefined, undefined, undefined
    ];
  }

  makeMove(player, cellIndex) {
    this.cellValues[cellIndex] = player;
  }

  get availableCellIndexes() {
    return this.cellValues.reduce((array, element, index) => {
      if(element === undefined) {
        array.push(index);
      }
      return array;
    }, []);
  }

  get winningLine() {
    return WIN_LINES.find(line => {
      let first = this.cellValues[line[0]];
      let second = this.cellValues[line[1]];
      let third = this.cellValues[line[2]];
      return first !== undefined && first === second &&
             second === third;
    });
  }

  get hasWin() {
    return this.winningLine !== undefined;
  }

  isCellIndexWinning(index) {
    let winningLine = this.winningLine;

    if(this.winningLine) {
      return this.winningLine.indexOf(index) > -1;
    } else {
      return false;
    }
  }
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

class RandomPlayer {
  async makeMove(board) {
    await sleep(1000);

    let availableCellIndexes = board.availableCellIndexes;
    let randomIndex = Math.floor(Math.random() * availableCellIndexes.length);
    let randomCellIndex = availableCellIndexes[randomIndex];

    board.makeMove(PLAYER_O, randomCellIndex);

    return board;
  }
}

export default class TickTac extends Component {
  @tracked board;

  constructor(options) {
    super(options);

    this.board = new Board();
  }

  async chooseCell(index) {
    this.board.makeMove(PLAYER_X, index);
    this.board = this.board;

    let aiPlayer = new RandomPlayer();
    this.board = await aiPlayer.makeMove(this.board);
  }

  newGame() {
    this.board = new Board();
  }
}
