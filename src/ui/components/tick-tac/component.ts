import Component, { tracked } from '@glimmer/component';

class Board {
  cells;

  constructor() {
    this.cells = [
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
}
