import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';
import Piece from './pieces/piece';
import King from './pieces/king';
import Pawn from './pieces/pawn';

export default class Board {
    public currentPlayer: Player;
    public lastmovestart: any = null;
    public lastmoveend: any = null;
    public lastmovepiece: any = null;
    private readonly board: (Piece | undefined)[][];

    public constructor(currentPlayer?: Player) {
        this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
        this.board = this.createBoard();
    }

    public setPiece(square: Square, piece: any) {
        this.board[square.row][square.col] = piece;
    }

    public getPiece(square: Square) {
        return this.board[square.row][square.col];
    }

    public otherpiecechecker(pos:Square,row:number,col:number) {
        if (pos.row+row <= GameSettings.BOARD_SIZE-1 && pos.row+row >= 0 && pos.col <= GameSettings.BOARD_SIZE-1 && pos.col >= 0) {
            if (this.getPiece(Square.at((pos.row+row),(pos.col+col))) == undefined) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    public otherpiecechecker1(pos:Square,row:number,col:number,flag: Boolean = false, player2: Player = Player.WHITE) {
        if (pos.row+row <= GameSettings.BOARD_SIZE-1 && pos.row+row >= 0 && pos.col <= GameSettings.BOARD_SIZE-1 && pos.col >= 0) {
            var piece: Piece | undefined = this.getPiece(Square.at((pos.row+row),(pos.col+col)));
            if (piece == undefined) {
                return ["true","false"]
            } else {
                if (piece.player != player2 && !(piece instanceof King)) {
                    return ["true","true"]
                } else {
                    return ["false","false"]
                }
            }
        } else {
            return ["false","false"]
        }
    }



    public findPiece(pieceToFind: Piece) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    public movePiece(fromSquare: Square, toSquare: Square) {
        const movingPiece = this.getPiece(fromSquare);
        this.lastmovestart = fromSquare;
        this.lastmoveend = toSquare;
        this.lastmovepiece = movingPiece;
        if ((fromSquare.col != toSquare.col) && (movingPiece instanceof Pawn) && this.getPiece(toSquare) == undefined) {
                if (fromSquare.col == toSquare.col + 1) {
                    this.setPiece(Square.at(fromSquare.row,toSquare.col),undefined);
                } else {
                    this.setPiece(Square.at(fromSquare.row,toSquare.col),undefined);
                }
        }
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);
            this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
        }
    }

    private createBoard() {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }
}
