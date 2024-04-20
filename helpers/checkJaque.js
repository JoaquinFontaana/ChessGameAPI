export default function checkJaque(board, team, kingPosition,enemyPieces) {
    const { fila, columna } = kingPosition
    //hacer movimientos contrarios y verificar si esta en attackable
    
    if (board[fila][columna].piece === "King" && board[fila][columna].team === team) {
        if (board[fila][columna].classAdditional === "threatenedKing") {
            const jaqueMate = checkJaqueMate(board, player, kingPosition)
            return { jaque: true, jaqueMate }
        }
    }
    else {
        throw new Error("The king is not in the position provided")
    }
} 