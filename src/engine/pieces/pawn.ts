import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        var output: Square[] = [];
        var pos = board.findPiece(this);
        output.push(Square.at((pos.row+1),(pos.col)));
        output.push(Square.at((pos.row-1),(pos.col)));
        return output;
        //identify pawns position
        // identify which adjacent positions are occupied
        // for every unoccupied position, append to array
    }
}
