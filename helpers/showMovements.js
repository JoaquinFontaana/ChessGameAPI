import moves from "./piecesMoves/moves";
import simulateMoves from "./simulateMoves";
export function showMovements(boardCopy,blackPieces,whitePieces,clickedPiece,team,blackPieces,whitePieces,whiteKingPosition,blackKingPosition){
    const {fila,columna,piece} = clickedPiece
    const possibleMoves = moves(boardCopy,fila,columna,piece,team);
    const legalMoves = simulateMoves(possibleMoves,fila,columna,boardCopy,team,blackPieces,whitePieces,whiteKingPosition,blackKingPosition);
    legalMoves.forEach((move) => {
        const { fila, columna, classAdditional } = move;
        boardCopy[fila][columna].classAdditional = classAdditional;
      });
      return boardCopy
}