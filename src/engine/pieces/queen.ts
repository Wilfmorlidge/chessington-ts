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
        for (let i = 1;i <= (GameSettings.BOARD_SIZE-1);i++) {
            // defines movement as a rook
            if (pos.col+i <= GameSettings.BOARD_SIZE-1) {
                output.push(Square.at((pos.row),(pos.col+i)));
            }
            if (pos.col-i >= 0) {
                output.push(Square.at((pos.row),(pos.col-i)));
            }
            if (pos.row+i <= GameSettings.BOARD_SIZE-1) {
                output.push(Square.at((pos.row+i),(pos.col)));
            }
            if (pos.row-i >= 0) {
                output.push(Square.at((pos.row-i),(pos.col)));
            }
            // defines movement as a bishop
            if (pos.row+i <= GameSettings.BOARD_SIZE-1 && pos.col+i <= GameSettings.BOARD_SIZE-1) {
                output.push(Square.at((pos.row+i),(pos.col+i)));
            }
            if (pos.row-i >= 0 && pos.col+i <= GameSettings.BOARD_SIZE-1) {
                output.push(Square.at((pos.row-i),(pos.col+i)));
            }
            if (pos.row+i <= GameSettings.BOARD_SIZE-1 && pos.col-i >= 0) {
                output.push(Square.at((pos.row+i),(pos.col-i)));
            }
            if (pos.row-i >= 0 && pos.col-i >= 0) {
                output.push(Square.at((pos.row-i),(pos.col-i)));
            }
        }
    return output
    }
}
