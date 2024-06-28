import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    public constructor(player: Player, has_moved: boolean = false) {
        super(player,has_moved);
    }
    public getAvailableMoves(board: Board) {
        var output: Square[] = [];
        var pos = board.findPiece(this);
        var collisions: Boolean[] = [false,false,false,false]
        for (let i = 1;i <= (GameSettings.BOARD_SIZE-1);i++) {
            // regular movement
            board.movevalidator(pos,0,i,collisions,0,this.player,output);
            board.movevalidator(pos,0,-i,collisions,1,this.player,output);
            board.movevalidator(pos,i,0,collisions,2,this.player,output);
            board.movevalidator(pos,-i,0,collisions,3,this.player,output);
            // special movement
                // not applicable
        }
        return output;
    }
}
