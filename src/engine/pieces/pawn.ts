import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {
    public has_moved: boolean = false;
    public player1: Player = Player.WHITE;
    public constructor(player: Player) {
        super(player);
        this.player1 = player
    }

    public getAvailableMoves(board: Board) {
        var output: Square[] = [];
        var pos = board.findPiece(this);
        if (this.player1 == Player.WHITE) {
            output.push(Square.at((pos.row+1),(pos.col)));
            if (this.has_moved == false) {
                output.push(Square.at((pos.row+2),(pos.col)));
            }
        }
        if (this.player1 == Player.BLACK) {
            output.push(Square.at((pos.row-1),(pos.col)));
            if (this.has_moved == false) {
                output.push(Square.at((pos.row-2),(pos.col)));
            }
        }
        return output;
        //identify pawns position
        // identify which adjacent positions are occupied
        // for every unoccupied position, append to array
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
        this.has_moved = true
    }

}
