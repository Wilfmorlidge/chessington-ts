import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Knight extends Piece {
    public player1: Player = Player.WHITE;
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        var output: Square[] = [];
        var pos = board.findPiece(this);
        if (pos.row-2 >= 0 && pos.col+1 <= GameSettings.BOARD_SIZE-1) {
            output.push(Square.at((pos.row-2),(pos.col+1)));
        }
        if (pos.row-2 >= 0 && pos.col-1 >= 0) {
            output.push(Square.at((pos.row-2),(pos.col-1)));
        }
        if (pos.row-1 >= 0 && pos.col+2 <= GameSettings.BOARD_SIZE-1) {
            output.push(Square.at((pos.row-1),(pos.col+2)));
        }
        if (pos.row-1 <= GameSettings.BOARD_SIZE-1 && pos.col-2 >= 0) {
            output.push(Square.at((pos.row-1),(pos.col-2)));
        }

        if (pos.row+2 <= GameSettings.BOARD_SIZE-1 && pos.col+1 <= GameSettings.BOARD_SIZE-1) {
            output.push(Square.at((pos.row+2),(pos.col+1)));
        }

        if (pos.row+2 <= GameSettings.BOARD_SIZE-1 && pos.col-1 >= 0) {
            output.push(Square.at((pos.row+2),(pos.col-1)));
        }
        if (pos.row+1 <= GameSettings.BOARD_SIZE-1 && pos.col+2 <= GameSettings.BOARD_SIZE-1) {
           output.push(Square.at((pos.row+1),(pos.col+2)));
        }

        if (pos.row+1 <= GameSettings.BOARD_SIZE-1 && pos.col-2 >= 0) {
            output.push(Square.at((pos.row+1),(pos.col-2)));
        }
  

        return output
    }
}
