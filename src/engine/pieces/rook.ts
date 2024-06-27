import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
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
            if (pos.col+i <= GameSettings.BOARD_SIZE-1 && board.otherpiecechecker(pos,0,1) && collision1 == false) {
                output.push(Square.at((pos.row),(pos.col+i)));
            }else {
                collision1 = true
            }
            if (pos.col-i >= 0 && board.otherpiecechecker(pos,0,-1) && collision2 == false) {
                output.push(Square.at((pos.row),(pos.col-i)));
            } else {
                collision2 = true
            }
            if (pos.row+i <= GameSettings.BOARD_SIZE-1 && board.otherpiecechecker(pos,1,0) && collision3 == false) {
                output.push(Square.at((pos.row+i),(pos.col)));
            } else {
                collision3 = true
            }
            if (pos.row-i >= 0 && board.otherpiecechecker(pos,-1,0) && collision4 == false) {
                output.push(Square.at((pos.row-i),(pos.col)));
            } else {
                collision4 = true
            }
        }
        return output;
    }
}
