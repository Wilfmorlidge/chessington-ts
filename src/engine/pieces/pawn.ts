import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Pawn extends Piece {
    public constructor(player: Player, has_moved: boolean = false) {
        super(player,has_moved);
    }

    public getAvailableMoves(board: Board) {
        var output: Square[] = [];
        var pos = board.findPiece(this);
        var collisions: Boolean[] = [false,false,false,false,false,false,false,false]
        var check: String[] = board.otherpiecechecker1(pos,1,0,collisions[0],this.player)
        // regular movement
            //not applicable
        //special movement
            //pawn movement
        if (this.player == Player.WHITE && check[0] == "true" && check[1] == "false" && pos.row+1 <= GameSettings.BOARD_SIZE-1) {
            output.push(Square.at((pos.row+1),(pos.col)));
            var check1: String[] = board.otherpiecechecker1(pos,2,0,collisions[1],this.player)
            if (this.has_moved == false && check[0] == "true" && check[1] == "false" && check1[0] == "true" && check1[1] == "false" && pos.row+2 <= GameSettings.BOARD_SIZE-1) {
                output.push(Square.at((pos.row+2),(pos.col)));
            }
        }
        check = board.otherpiecechecker1(pos,1,1,collisions[2],this.player)
        if (pos.row+1 <= GameSettings.BOARD_SIZE-1 && pos.col+1 <= GameSettings.BOARD_SIZE-1 && this.player == Player.WHITE && check[0] == "true" && check[1] == "true") {
            output.push(Square.at((pos.row+1),(pos.col+1)));
        }
        check = board.otherpiecechecker1(pos,1,-1,collisions[3],this.player)
        if (pos.row+1 <= GameSettings.BOARD_SIZE-1 && pos.col-1 >= 0 && this.player == Player.WHITE && check[0] == "true" && check[1] == "true") {
            output.push(Square.at((pos.row+1),(pos.col-1)));
        }

        check = board.otherpiecechecker1(pos,-1,0,collisions[4],this.player)
        if (this.player == Player.BLACK && check[0] == "true" && check[1] == "false" && pos.row-1 >= 0) {
            output.push(Square.at((pos.row-1),(pos.col)));
            check1 = board.otherpiecechecker1(pos,-2,0,collisions[5],this.player)
            if (this.has_moved == false && check[0] == "true" && check[1] == "false" && check1[0] == "true" && check1[1] == "false" && pos.row-2 >= 0) {
                output.push(Square.at((pos.row-2),(pos.col)));
            }
        }

        check = board.otherpiecechecker1(pos,-1,+1,collisions[2],this.player)
        if (pos.row-1 >= 0 && pos.col+1 <= GameSettings.BOARD_SIZE-1 && this.player == Player.BLACK && check[0] == "true" && check[1] == "true") {
            output.push(Square.at((pos.row-1),(pos.col+1)));
        }
        check = board.otherpiecechecker1(pos,-1,-1,collisions[3],this.player)
        if (pos.row-1 >= 0 && pos.col-1 >= 0 && this.player == Player.BLACK && check[0] == "true" && check[1] == "true") {
            output.push(Square.at((pos.row-1),(pos.col-1)));
        }

        // en passant
        if (this.player == Player.WHITE && (board.getPiece(Square.at(pos.row,pos.col+1)) == board.lastmovepiece) && (board.lastmovepiece instanceof Pawn) && ((board.lastmovestart.row - board.lastmoveend.row) == 2)) {
            output.push(Square.at((pos.row+1),(pos.col+1)));
        }
        if (this.player == Player.WHITE && (board.getPiece(Square.at(pos.row,pos.col-1)) == board.lastmovepiece) && (board.lastmovepiece instanceof Pawn) && ((board.lastmovestart.row - board.lastmoveend.row) == 2)) {
            output.push(Square.at((pos.row+1),(pos.col-1)));
        }

        if (this.player == Player.BLACK && (board.getPiece(Square.at(pos.row,pos.col+1)) == board.lastmovepiece) && (board.lastmovepiece instanceof Pawn) && ((board.lastmovestart.row - board.lastmoveend.row) == -2)) {
            output.push(Square.at((pos.row-1),(pos.col+1)));
        }
        if (this.player == Player.BLACK && (board.getPiece(Square.at(pos.row,pos.col-1)) == board.lastmovepiece) && (board.lastmovepiece instanceof Pawn) && ((board.lastmovestart.row - board.lastmoveend.row) == -2)) {
            output.push(Square.at((pos.row-1),(pos.col-1)));
        }


        return output;
        //identify pawns position
        // identify which adjacent positions are occupied
        // for every unoccupied position, append to array
    }



}
