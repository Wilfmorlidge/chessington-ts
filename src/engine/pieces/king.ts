import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class King extends Piece {
    public player1: Player = Player.WHITE;
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        var output: Square[] = [];
        var pos = board.findPiece(this);
            // defines movement as a rook
        if (pos.col+1 <= GameSettings.BOARD_SIZE-1) {
            output.push(Square.at((pos.row),(pos.col+1)));
        }
        if (pos.col-1 >= 0) {
            output.push(Square.at((pos.row),(pos.col-1)));
        }
        if (pos.row+1 <= GameSettings.BOARD_SIZE-1) {
            output.push(Square.at((pos.row+1),(pos.col)));
        }
        if (pos.row-1 >= 0) {
            output.push(Square.at((pos.row-1),(pos.col)));
        }
            // defines movement as a bishop
        if (pos.row+1 <= GameSettings.BOARD_SIZE-1 && pos.col+1 <= GameSettings.BOARD_SIZE-1) {
            output.push(Square.at((pos.row+1),(pos.col+1)));
        }
        if (pos.row-1 >= 0 && pos.col+1 <= GameSettings.BOARD_SIZE-1) {
            output.push(Square.at((pos.row-1),(pos.col+1)));
        }
        if (pos.row+1 <= GameSettings.BOARD_SIZE-1 && pos.col-1 >= 0) {
                output.push(Square.at((pos.row+1),(pos.col-1)));
        }
        if (pos.row-1 >= 0 && pos.col-1 >= 0) {
            output.push(Square.at((pos.row-1),(pos.col-1)));
        }
        return output
    }
}

