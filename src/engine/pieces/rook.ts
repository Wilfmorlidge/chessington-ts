import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    public player1: Player = Player.WHITE;
    public constructor(player: Player) {
        super(player);
    }
    public getAvailableMoves(board: Board) {
        var output: Square[] = [];
        var pos = board.findPiece(this);
        var collisions: Boolean[] = [false,false,false,false]
        for (let i = 1;i <= (GameSettings.BOARD_SIZE-1);i++) {
            var check: String[] = board.otherpiecechecker1(pos,0,i,collisions[0],this.player1)
            if (pos.col+i <= GameSettings.BOARD_SIZE-1 && check[0] == "true" && collisions[0] == false) {
                output.push(Square.at((pos.row),(pos.col+i)));
                if (check[1] == "true") {
                    collisions[0] = true
                }
            } else {
                collisions[0] = true
            }
            check = board.otherpiecechecker1(pos,0,-i,collisions[1],this.player1)
            if (pos.col-i >= 0 && check[0] == "true" && collisions[1] == false) {
                output.push(Square.at((pos.row),(pos.col-i)));
                if (check[1] == "true") {
                    collisions[1] = true
                }
            } else {
                collisions[1] = true
            }
            check = board.otherpiecechecker1(pos,i,0,collisions[2],this.player1)
            if (pos.row+i <= GameSettings.BOARD_SIZE-1 && check[0] == "true" && collisions[2] == false) {
                output.push(Square.at((pos.row+i),(pos.col)));
                if (check[1] == "true") {
                    collisions[2] = true
                }
            } else {
                collisions[2] = true
            }
            check = board.otherpiecechecker1(pos,-i,0,collisions[3],this.player)
            if (pos.row-i >= 0 && check[0] == "true" && collisions[3] == false) {
                output.push(Square.at((pos.row-i),(pos.col)));
                if (check[1] == "true") {
                    collisions[3] = true
                }
            } else {
                collisions[3] = true
            }
        }
        return output;
    }
}
