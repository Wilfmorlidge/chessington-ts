import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

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
        var collisions: Boolean[] = [false,false,false,false,false,false,false,false]
        var check: String[] = board.otherpiecechecker1(pos,1,0,collisions[0],this.player1)
        if (this.player1 == Player.WHITE && check[0] == "true" && check[1] == "false" && pos.row+1 <= GameSettings.BOARD_SIZE-1) {
            output.push(Square.at((pos.row+1),(pos.col)));
            var check1: String[] = board.otherpiecechecker1(pos,2,0,collisions[1],this.player1)
            if (this.has_moved == false && check[0] == "true" && check[1] == "false" && check1[0] == "true" && check1[1] == "false" && pos.row+2 <= GameSettings.BOARD_SIZE-1) {
                output.push(Square.at((pos.row+2),(pos.col)));
            }
        }
        check = board.otherpiecechecker1(pos,1,1,collisions[2],this.player1)
        if (pos.row+1 <= GameSettings.BOARD_SIZE-1 && pos.col+1 <= GameSettings.BOARD_SIZE-1 && this.player1 == Player.WHITE && check[0] == "true" && check[1] == "true") {
            output.push(Square.at((pos.row+1),(pos.col+1)));
        }
        check = board.otherpiecechecker1(pos,1,-1,collisions[3],this.player1)
        if (pos.row+1 <= GameSettings.BOARD_SIZE-1 && pos.col-1 >= 0 && this.player1 == Player.WHITE && check[0] == "true" && check[1] == "true") {
            output.push(Square.at((pos.row+1),(pos.col-1)));
        }

        check = board.otherpiecechecker1(pos,-1,0,collisions[4],this.player1)
        if (this.player1 == Player.BLACK && check[0] == "true" && check[1] == "false" && pos.row-1 >= 0) {
            output.push(Square.at((pos.row-1),(pos.col)));
            check1 = board.otherpiecechecker1(pos,-2,0,collisions[5],this.player1)
            if (this.has_moved == false && check[0] == "true" && check[1] == "false" && check1[0] == "true" && check1[1] == "false" && pos.row-2 >= 0) {
                output.push(Square.at((pos.row-2),(pos.col)));
            }
        }

        check = board.otherpiecechecker1(pos,-1,+1,collisions[2],this.player1)
        if (pos.row-1 >= 0 && pos.col+1 <= GameSettings.BOARD_SIZE-1 && this.player1 == Player.BLACK && check[0] == "true" && check[1] == "true") {
            output.push(Square.at((pos.row-1),(pos.col+1)));
        }
        check = board.otherpiecechecker1(pos,-1,-1,collisions[3],this.player1)
        if (pos.row-1 >= 0 && pos.col-1 >= 0 && this.player1 == Player.BLACK && check[0] == "true" && check[1] == "true") {
            output.push(Square.at((pos.row-1),(pos.col-1)));
        }

        // defining movement in en Passant
        if (this.player1 == Player.WHITE && (board.getPiece(Square.at(pos.row,pos.col+1)) == board.lastmovepiece) && (board.lastmovepiece instanceof Pawn) && ((board.lastmovestart.row - board.lastmoveend.row) == 2)) {
            output.push(Square.at((pos.row+1),(pos.col+1)));
        }
        if (this.player1 == Player.WHITE && (board.getPiece(Square.at(pos.row,pos.col-1)) == board.lastmovepiece) && (board.lastmovepiece instanceof Pawn) && ((board.lastmovestart.row - board.lastmoveend.row) == 2)) {
            output.push(Square.at((pos.row+1),(pos.col-1)));
        }

        if (this.player1 == Player.BLACK && (board.getPiece(Square.at(pos.row,pos.col+1)) == board.lastmovepiece) && (board.lastmovepiece instanceof Pawn) && ((board.lastmovestart.row - board.lastmoveend.row) == -2)) {
            output.push(Square.at((pos.row-1),(pos.col+1)));
        }
        if (this.player1 == Player.BLACK && (board.getPiece(Square.at(pos.row,pos.col-1)) == board.lastmovepiece) && (board.lastmovepiece instanceof Pawn) && ((board.lastmovestart.row - board.lastmoveend.row) == -2)) {
            output.push(Square.at((pos.row-1),(pos.col-1)));
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
