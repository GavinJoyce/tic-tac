import Component, { tracked } from '@glimmer/component';

export default class GameCell extends Component {
  @tracked('args') get isWinning() {
    return this.args.board.isCellIndexWinning(this.args.index);
  }
}
