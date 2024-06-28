import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Piece {
    public has_moved: boolean = false;
    public player: Player;

    public constructor(player: Player, has_moved: boolean = false) {
        this.player = player;
        this.has_moved = has_moved
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
        this.has_moved = true
    }
}
