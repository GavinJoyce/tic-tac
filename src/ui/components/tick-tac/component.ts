import Component, { tracked } from '@glimmer/component';

class Board {
  cellValues;

  constructor() {
    this.cellValues = [
      'X', 'O', undefined,
      undefined, undefined, undefined,
      undefined, undefined, undefined
    ];
  }
}

export default class TickTac extends Component {
  @tracked board;

  constructor(options) {
    super(options);

    this.board = new Board();
  }

  chooseCell(index) {
    this.board.cellValues[index] = 'X';

    this.board = this.board;
  }
}
