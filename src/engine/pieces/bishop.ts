import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Bishop extends Piece {
    public player1: Player = Player.WHITE;
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        var output: Square[] = [];
        var pos = board.findPiece(this);
        var collision1: Boolean = false;
        var collision2: Boolean = false;
        var collision3: Boolean = false;
        var collision4: Boolean = false;
        for (let i = 1;i <= (GameSettings.BOARD_SIZE-1);i++) {
            if (pos.row+i <= GameSettings.BOARD_SIZE-1 && pos.col+i <= GameSettings.BOARD_SIZE-1 && board.otherpiecechecker(pos,i,i) && collision1 == false) {
                output.push(Square.at((pos.row+i),(pos.col+i)));
            }else {
                collision1 = true
            }
            if (pos.row-i >= 0 && pos.col+i <= GameSettings.BOARD_SIZE-1 && board.otherpiecechecker(pos,-i,i) && collision2 == false) {
                output.push(Square.at((pos.row-i),(pos.col+i)));
            }else {
                collision2 = true
            }
            if (pos.row+i <= GameSettings.BOARD_SIZE-1 && pos.col-i >= 0 && board.otherpiecechecker(pos,i,-i) && collision3 == false) {
                output.push(Square.at((pos.row+i),(pos.col-i)));
            }else {
                collision3 = true
            }
            if (pos.row-i >= 0 && pos.col-i >= 0 && board.otherpiecechecker(pos,-i,-i) && collision4 == false) {
                output.push(Square.at((pos.row-i),(pos.col-i)));
            }else {
                collision4 = true
            }
        }
        return output;
    }
}
