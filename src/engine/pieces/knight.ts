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
        var collisions: Boolean[] = [false,false,false,false,false,false,false,false]
        var check: String[] = board.otherpiecechecker1(pos,-2,1,collisions[0],this.player1)
        if (pos.row-2 <= GameSettings.BOARD_SIZE-1 && pos.col+1 <= GameSettings.BOARD_SIZE-1 && check[0] == "true" && collisions[0] == false) {
            output.push(Square.at((pos.row-2),(pos.col+1)));
            if (check[1] == "true") {
                collisions[0] = true
            }
        }else {
            collisions[0] = true
        }

        check = board.otherpiecechecker1(pos,-2,-1,collisions[1],this.player1)
        if (pos.row-2 >= 0 && pos.col-1 >= 0 && check[0] == "true" && collisions[1] == false) {
            output.push(Square.at((pos.row-2),(pos.col-1)));
            if (check[1] == "true") {
                collisions[1] = true
            }
        }else {
            collisions[1] = true
        }

        check = board.otherpiecechecker1(pos,-1,+2,collisions[2],this.player1)
        if (pos.row-1 >= 0 && pos.col+2 <= GameSettings.BOARD_SIZE-1 && check[0] == "true" && collisions[2] == false) {
            output.push(Square.at((pos.row-1),(pos.col+2)));
            if (check[1] == "true") {
                collisions[2] = true
            }
        }else {
            collisions[2] = true
        }

        check = board.otherpiecechecker1(pos,-1,-2,collisions[3],this.player1)
        if (pos.row-1 >= 0 && pos.col-2 >= 0 && check[0] == "true" && collisions[3] == false) {
            output.push(Square.at((pos.row-1),(pos.col-2)));
            if (check[1] == "true") {
                collisions[3] = true
            }
        }else {
            collisions[3] = true
        }

        check = board.otherpiecechecker1(pos,+2,+1,collisions[4],this.player1)
        if (pos.row+2 <= GameSettings.BOARD_SIZE-1 && pos.col+1 <= GameSettings.BOARD_SIZE-1 && check[0] == "true" && collisions[4] == false) {
            output.push(Square.at((pos.row+2),(pos.col+1)));
            if (check[1] == "true") {
                collisions[4] = true
            }
        }else {
            collisions[4] = true
        }

        check = board.otherpiecechecker1(pos,+2,-1,collisions[5],this.player1)
        if (pos.row+2 <= GameSettings.BOARD_SIZE-1 && pos.col-1 >= 0 && check[0] == "true" && collisions[5] == false) {
            output.push(Square.at((pos.row+2),(pos.col-1)));
            if (check[1] == "true") {
                collisions[5] = true
            }
        }else {
            collisions[5] = true
        }

        check = board.otherpiecechecker1(pos,+1,+2,collisions[6],this.player1)
        if (pos.row+1 <= GameSettings.BOARD_SIZE-1 && pos.col+2 <= GameSettings.BOARD_SIZE-1 && check[0] == "true" && collisions[6] == false) {
            output.push(Square.at((pos.row+1),(pos.col+2)));
            if (check[1] == "true") {
                collisions[6] = true
            }
        }else {
            collisions[6] = true
        }

        check = board.otherpiecechecker1(pos,+1,-2,collisions[7],this.player1)
        if (pos.row+1 <= GameSettings.BOARD_SIZE-1 && pos.col-2 >= 0 && check[0] == "true" && collisions[7] == false) {
            output.push(Square.at((pos.row+1),(pos.col-2)));
            if (check[1] == "true") {
                collisions[7] = true
            }
        }else {
            collisions[7] = true
        }
  
        return output
    }
}
