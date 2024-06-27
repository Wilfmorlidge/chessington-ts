import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Queen extends Piece {
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
        var collision5: Boolean = false;
        var collision6: Boolean = false;
        var collision7: Boolean = false;
        var collision8: Boolean = false;
        for (let i = 1;i <= (GameSettings.BOARD_SIZE-1);i++) {
            // defines movement as a rook
            if (pos.col+i <= GameSettings.BOARD_SIZE-1 && board.otherpiecechecker(pos,0,i) && collision1 == false) {
                output.push(Square.at((pos.row),(pos.col+i)));
            } else {
                collision1 = true
            }
            if (pos.col-i >= 0 && board.otherpiecechecker(pos,0,-i) && collision2 == false) {
                output.push(Square.at((pos.row),(pos.col-i)));
            } else {
                collision2 = true
            }
            if (pos.row+i <= GameSettings.BOARD_SIZE-1 && board.otherpiecechecker(pos,i,0) && collision3 == false) {
                output.push(Square.at((pos.row+i),(pos.col)));
            } else {
                collision3 = true
            }
            if (pos.row-i >= 0 && board.otherpiecechecker(pos,-i,0) && collision4 == false) {
                output.push(Square.at((pos.row-i),(pos.col)) );
            }else {
                collision4 = true
            }
            // defines movement as a bishop
            if (pos.row+i <= GameSettings.BOARD_SIZE-1 && pos.col+i <= GameSettings.BOARD_SIZE-1 && board.otherpiecechecker(pos,i,i) && collision5 == false) {
                output.push(Square.at((pos.row+i),(pos.col+i)));
            }else {
                collision5 = true
            }
            if (pos.row-i >= 0 && pos.col+i <= GameSettings.BOARD_SIZE-1 && board.otherpiecechecker(pos,-i,i) && collision6 == false) {
                output.push(Square.at((pos.row-i),(pos.col+i)));
            }else {
                collision6 = true
            }
            if (pos.row+i <= GameSettings.BOARD_SIZE-1 && pos.col-i >= 0 && board.otherpiecechecker(pos,i,-i) && collision7 == false) {
                output.push(Square.at((pos.row+i),(pos.col-i)));
            }else {
                collision7 = true
            }
            if (pos.row-i >= 0 && pos.col-i >= 0 && board.otherpiecechecker(pos,-i,-i) && collision8 == false) {
                output.push(Square.at((pos.row-i),(pos.col-i)));
            }else {
                collision8 = true
            }
        }
    return output
    }
}
