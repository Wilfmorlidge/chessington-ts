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
        for (let i = 1;i <= (GameSettings.BOARD_SIZE-1);i++) {
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
        }
        return output;
    }
}
