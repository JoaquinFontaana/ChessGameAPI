import moves from "./piecesMoves/moves";
import simulateMoves from "./simulateMoves";
export default function checkMove(tofila,toColumna,fromColumna,fromFila,team,board,whiteKingPosition,blackKingPosition,whitePieces,blackPieces){
    const piece = board[fila][columna].piece
    if(!piece){
        return false
    }
    const pieceTeam = board[fila][columna].team
    if(pieceTeam !== team){
        return false
    }
    const possiblesMoves = moves(board,fromFila,fromColumna,piece,team)
    const legalMoves = simulateMoves(possiblesMoves,fromFila,fromColumna,board,team,blackPieces,whitePieces,whiteKingPosition,blackKingPosition)
    legalMoves.some((legalMove) => {
        if(legalMove.fila === tofila && legalMove.columna === toColumna){
            return true
        }
    })
    return false
}