import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';
import Rook from './rook';

export default class King extends Piece {
    public constructor(player: Player, has_moved: boolean = false) {
        super(player,has_moved);
    }

    public getAvailableMoves(board: Board) {
    var output: Square[] = [];
    var pos = board.findPiece(this);
    var collisions: Boolean[] = [false,false,false,false,false,false,false,false];
    //regular movement
    board.movevalidator(pos,1,1,collisions,0,this.player,output);
    board.movevalidator(pos,-1,1,collisions,1,this.player,output);
    board.movevalidator(pos,1,-1,collisions,2,this.player,output);
    board.movevalidator(pos,-1,-1,collisions,3,this.player,output);
    board.movevalidator(pos,0,1,collisions,4,this.player,output);
    board.movevalidator(pos,0,-1,collisions,5,this.player,output);
    board.movevalidator(pos,1,0,collisions,6,this.player,output);
    board.movevalidator(pos,-1,0,collisions,7,this.player,output);
    //special case moves
        // castling
        console.log("this should always trigger")
        if (this.has_moved == false) {
            console.log("validates that the king has not moved")
            let special_collisions: Boolean[] = [false]
            if (this.player == Player.WHITE) {
                console.log("validates that king is white")
                if ((board.getPiece(Square.at(0,0)) instanceof Rook)  && (board.getPiece(Square.at(0,0))?.has_moved == false) && (board.getPiece(Square.at(0,0))?.player == Player.WHITE)) {
                    console.log("validates that their is an unmoved white rook at 0,0")
                    for (let i = 1;i <= 3;i++) {
                        console.log("iterates" + i + "times")
                        var piece: Piece | undefined = board.getPiece(Square.at((0),(pos.col-i)));
                        if (!(pos.col-i >= 0 && special_collisions[0] == false && piece == undefined)) {
                            console.log("incorrectly finds a collision")
                            special_collisions[0] = true;
                        }
                    }
                    console.log("isn't weird")
                    if (special_collisions[0] == false) {
                        console.log("adds the appropriate move to the set of moves")
                        output.push(Square.at(0,2));
                    }
                }
                console.log("isn't super weird")
                if ((board.getPiece(Square.at(0,7)) instanceof Rook)  && (board.getPiece(Square.at(0,7))?.has_moved == false) && (board.getPiece(Square.at(0,7))?.player == Player.WHITE)) {
                    console.log("validates that their is an unmoved white rook at 0,7")
                    for (let i = 1;i <= 2;i++) {
                        console.log("iterates" + i + "times")
                        var piece: Piece | undefined = board.getPiece(Square.at((0),(pos.col+i)));
                        if (!(pos.col+i <= GameSettings.BOARD_SIZE-1 && special_collisions[0] == false && piece == undefined)) {
                            console.log("incorrectly finds a collision")
                            special_collisions[0] = true;
                        }
                    }
                    if (special_collisions[0] == false) {
                        output.push(Square.at(0,6));
                    }
                }
            } else {
                if ((board.getPiece(Square.at(7,0)) instanceof Rook)  && (board.getPiece(Square.at(7,0))?.has_moved == false) && (board.getPiece(Square.at(7,0))?.player == Player.BLACK)) {
                    for (let i = 1;i <= 3;i++) {
                        var piece: Piece | undefined = board.getPiece(Square.at((7),(pos.col-i)));
                        if (!(pos.col-i >= 0 && special_collisions[0] == false && piece == undefined)) {
                            special_collisions[0] = true;
                        }
                    }
                    if (special_collisions[0] == false) {
                        console.log("ring a ding ding")
                        output.push(Square.at(7,2));
                    }
                }
                if ((board.getPiece(Square.at(7,7)) instanceof Rook)  && (board.getPiece(Square.at(7,7))?.has_moved == false) && (board.getPiece(Square.at(7,7))?.player == Player.BLACK)) {
                    for (let i = 1;i <= 2;i++) {
                        var piece: Piece | undefined = board.getPiece(Square.at((7),(pos.col+i)));
                        if (!(pos.col+i <= GameSettings.BOARD_SIZE-1 && special_collisions[0] == false && piece == undefined)) {
                            special_collisions[0] = true;
                        }
                    }
                    if (special_collisions[0] == false) {
                        output.push(Square.at(7,6));
                    }
                }
            }

        }

    return output
}
}

