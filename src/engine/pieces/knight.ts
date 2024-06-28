import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Knight extends Piece {
    public constructor(player: Player, has_moved: boolean = false) {
        super(player,has_moved);
    }

    public getAvailableMoves(board: Board) {
        var output: Square[] = [];
        var pos = board.findPiece(this);
        var collisions: Boolean[] = [false,false,false,false,false,false,false,false]
        var check: String[] = board.otherpiecechecker1(pos,-2,1,collisions[0],this.player)
        // regular movement
        board.movevalidator(pos,2,1,collisions,0,this.player,output);
        board.movevalidator(pos,2,-1,collisions,1,this.player,output);
        board.movevalidator(pos,1,2,collisions,2,this.player,output);
        board.movevalidator(pos,-1,2,collisions,3,this.player,output);
        board.movevalidator(pos,-2,1,collisions,4,this.player,output);
        board.movevalidator(pos,-2,-1,collisions,5,this.player,output);
        board.movevalidator(pos,1,-2,collisions,6,this.player,output);
        board.movevalidator(pos,-1,-2,collisions,7,this.player,output);
        // special movement
                // not applicable
        return output
    }
}
