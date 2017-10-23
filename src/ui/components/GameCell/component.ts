import Component, { tracked } from '@glimmer/component';

export default class GameCell extends Component {
  @tracked('args') get isWinning() {
    return this.args.board.isCellIndexWinning(this.args.index);
  }

  @tracked('args') get isAvailable() {
    return this.args.board.cellValues[this.args.index] === undefined;
  }

  onClick() {
    if(this.isAvailable) {
      this.args.onClick(this.args.index);
    }
  }
}
