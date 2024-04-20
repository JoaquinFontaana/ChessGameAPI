function rookJaqueMoves(filaIndex, columnaIndex, team, boardToUpdate) {
    let i = filaIndex + 1
    let y = columnaIndex
    let king = false
    let enemyPiece = false
    while (
        i >= 0 &&
        i < boardToUpdate.length &&
        boardToUpdate[i][y] &&
        boardToUpdate[i][y].team !== team
        && !king
        && !enemyPiece
    ) {
        if (boardToUpdate[i][y].piece === undefined) boardToUpdate[i][y].classAdditional = "threatened"
        else if (boardToUpdate[i][y].piece === "King" && boardToUpdate[i][y].team !== team) {
            boardToUpdate[i][y].classAdditional = "threatenedKing"
            king = true
        }
        else if (boardToUpdate[i][y].piece && boardToUpdate[i][y].team !== team) {
            boardToUpdate[i][y].classAdditional = "threatened"
            enemyPiece = true
        }
        i++
    }
    i = filaIndex - 1
    y = columnaIndex
    king = false
    enemyPiece = false
    while (
        i >= 0 &&
        i < boardToUpdate.length &&
        boardToUpdate[i][y] &&
        boardToUpdate[i][y].team !== team
        && !king
        && !enemyPiece
    ) {
        if (boardToUpdate[i][y].piece === undefined) boardToUpdate[i][y].classAdditional = "threatened"
        else if (boardToUpdate[i][y].piece === "King" && boardToUpdate[i][y].team !== team) {
            boardToUpdate[i][y].classAdditional = "threatenedKing"
            king = true
        }
        else if (boardToUpdate[i][y].piece && boardToUpdate[i][y].team !== team) {
            boardToUpdate[i][y].classAdditional = "threatened"
            enemyPiece = true
        }
        i--
    }
    i = filaIndex
    y = columnaIndex + 1
    king = false
    enemyPiece = false
    while (
        y >= 0 &&
        y < boardToUpdate.length &&
        boardToUpdate[i][y] &&
        boardToUpdate[i][y].team !== team
        && !king
        && !enemyPiece
    ) {
        if (boardToUpdate[i][y].piece === undefined) boardToUpdate[i][y].classAdditional = "threatened"
        else if (boardToUpdate[i][y].piece === "King" && boardToUpdate[i][y].team !== team) {
            boardToUpdate[i][y].classAdditional = "threatenedKing"
            king = true
        }
        else if (boardToUpdate[i][y].piece && boardToUpdate[i][y].team !== team) {
            boardToUpdate[i][y].classAdditional = "threatened"
            enemyPiece = true
        }
        y++
    }
    i = filaIndex
    y = columnaIndex - 1
    king = false
    enemyPiece = false
    while (
        y >= 0 &&
        y < boardToUpdate.length &&
        boardToUpdate[i][y] &&
        boardToUpdate[i][y].team !== team
        && !king
        && !enemyPiece
    ) {
        if (boardToUpdate[i][y].piece === undefined) boardToUpdate[i][y].classAdditional = "threatened"
        else if (boardToUpdate[i][y].piece === "King" && boardToUpdate[i][y].team !== team) {
            boardToUpdate[i][y].classAdditional = "threatenedKing"
            king = true
        }
        else if (boardToUpdate[i][y].piece && boardToUpdate[i][y].team !== team) {
            boardToUpdate[i][y].classAdditional = "threatened"
            enemyPiece = true
        }
        y--
    }
}

function bishopJaqueMoves(filaIndex, columnaIndex, team, boardToUpdate) {
    let king = false
    let i = filaIndex - 1
    let y = columnaIndex + 1
    let enemyPiece = false
    while (
        i >= 0 &&
        i < boardToUpdate.length &&
        y >= 0 &&
        y < boardToUpdate[0].length &&
        boardToUpdate[i][y] &&
        boardToUpdate[i][y].team !== team
        && !king
        && !enemyPiece
    ) {
        if (boardToUpdate[i][y].piece === undefined) boardToUpdate[i][y].classAdditional = "threatened"
        else if (boardToUpdate[i][y].piece === "King" && boardToUpdate[i][y].team !== team) {
            boardToUpdate[i][y].classAdditional = "threatenedKing"
            king = true
        }
        else if (boardToUpdate[i][y].piece && boardToUpdate[i][y].team !== team) {
            boardToUpdate[i][y].classAdditional = "threatened"
            enemyPiece = true
        }
        i--
        y++
    }
    i = filaIndex - 1
    y = columnaIndex - 1
    king = false
    enemyPiece = false
    while (
        i >= 0 &&
        i < boardToUpdate.length &&
        y >= 0 &&
        y < boardToUpdate[0].length &&
        boardToUpdate[i][y] &&
        boardToUpdate[i][y].team !== team
        && !king
        && !enemyPiece
    ) {
        if (boardToUpdate[i][y].piece === undefined) boardToUpdate[i][y].classAdditional = "threatened"
        else if (boardToUpdate[i][y].piece === "King" && boardToUpdate[i][y].team !== team) {
            boardToUpdate[i][y].classAdditional = "threatenedKing"
            king = true
        }
        else if (boardToUpdate[i][y].piece && boardToUpdate[i][y].team !== team) {
            boardToUpdate[i][y].classAdditional = "threatened"
            enemyPiece = true
        }
        i--
        y--
    }
    king = false
    i = filaIndex + 1
    y = columnaIndex + 1
    enemyPiece = false
    while (
        i >= 0 &&
        i < boardToUpdate.length &&
        y >= 0 &&
        y < boardToUpdate[0].length &&
        boardToUpdate[i][y] &&
        boardToUpdate[i][y].team !== team
        && !king
        && !enemyPiece
    ) {
        if (boardToUpdate[i][y].piece === undefined) boardToUpdate[i][y].classAdditional = "threatened"
        else if (boardToUpdate[i][y].piece === "King" && boardToUpdate[i][y].team !== team) {
            boardToUpdate[i][y].classAdditional = "threatenedKing"
            king = true
        }
        else if (boardToUpdate[i][y].piece && boardToUpdate[i][y].team !== team) {
            boardToUpdate[i][y].classAdditional = "threatened"
            enemyPiece = true
        }
        i++
        y++
    }
    i = filaIndex + 1
    y = columnaIndex - 1
    king = false
    enemyPiece = false
    while (
        i >= 0 &&
        i < boardToUpdate.length &&
        y >= 0 &&
        y < boardToUpdate[0].length &&
        boardToUpdate[i][y] &&
        boardToUpdate[i][y].team !== team
        && !king
        && !enemyPiece
    ) {
        if (boardToUpdate[i][y].piece === undefined) boardToUpdate[i][y].classAdditional = "threatened"
        else if (boardToUpdate[i][y].piece === "King" && boardToUpdate[i][y].team !== team) {
            boardToUpdate[i][y].classAdditional = "threatenedKing"
            king = true
        }
        else if (boardToUpdate[i][y].piece && boardToUpdate[i][y].team !== team) {
            boardToUpdate[i][y].classAdditional = "threatened"
            enemyPiece = true
        }
        i++
        y--
    }
}
/**
 * Calculates the possible knight moves that can result in a check (jaque).
 */
function knightJaqueMoves(filaIndex, columnaIndex, team, boardToUpdate) {
    const JaqueMoves = [
        { fila: -2, columna: -1 },
        { fila: -2, columna: 1 },
        { fila: -1, columna: -2 },
        { fila: -1, columna: 2 },
        { fila: 1, columna: -2 },
        { fila: 1, columna: 2 },
        { fila: 2, columna: -1 },
        { fila: 2, columna: 1 },
    ];

    // Verificar cada movimiento posible
    JaqueMoves.forEach(posiciones => {
        const { fila, columna } = posiciones
        const i = filaIndex + fila;
        const y = columnaIndex + columna;
        // Verificar si la posición está dentro del tablero
        if (i >= 0 &&
            i < boardToUpdate.length &&
            y >= 0 &&
            y < boardToUpdate[0].length) {
            // Verificar si la posición está vacía o tiene una pieza del equipo contrario
            if (boardToUpdate[i][y].team !== team) {
                // Asignar la clase según si está vacía o tiene una pieza para atacar
                if(boardToUpdate[i][y].piece === "King" && boardToUpdate[i][y].team !== team) boardToUpdate[i][y].classAdditional = "threatenedKing"
                else if (boardToUpdate[i][y].piece === undefined || boardToUpdate[i][y].team !== team) {
                    boardToUpdate[i][y].classAdditional = "threatened";
                }
            }
        }
    })
}
function queenJaqueMoves(filaIndex, columnaIndex, team, boardToUpdate) {
    rookJaqueMoves(filaIndex, columnaIndex, team, boardToUpdate)
    bishopJaqueMoves(filaIndex, columnaIndex, team, boardToUpdate)
}
/**
 * Calculates the possible moves for a pawn to put the opponent's king in check.
 */
function pawnJaqueMoves(filaIndex, columnaIndex, team, boardToUpdate) {
    if (team === "White") {
        let positionToEvaluate = boardToUpdate[filaIndex - 1][columnaIndex + 1]
        if (positionToEvaluate && positionToEvaluate.piece === "King" && positionToEvaluate.team !== team) {
            boardToUpdate[filaIndex - 1][columnaIndex + 1].classAdditional = "threatenedKing"
        }
        else if (positionToEvaluate && (positionToEvaluate.piece === undefined || positionToEvaluate.team !== team)) {
            boardToUpdate[filaIndex - 1][columnaIndex + 1].classAdditional = "threatened";
        }
        positionToEvaluate = boardToUpdate[filaIndex - 1][columnaIndex - 1]
        if (positionToEvaluate && positionToEvaluate.piece === "King" && positionToEvaluate.team !== team) {
            boardToUpdate[filaIndex - 1][columnaIndex - 1].classAdditional = "threatenedKing"
        }
        else if (positionToEvaluate && (positionToEvaluate.piece === undefined || positionToEvaluate.team !== team)) {
            boardToUpdate[filaIndex - 1][columnaIndex - 1].classAdditional = "threatened";
        }
    }
    if (team === "Black") {
        let positionToEvaluate = boardToUpdate[filaIndex + 1][columnaIndex + 1]
        if (positionToEvaluate && positionToEvaluate.piece === "King" && positionToEvaluate.team !== team) {
            boardToUpdate[filaIndex + 1][columnaIndex + 1].classAdditional = "threatenedKing"
        }
        else if (positionToEvaluate && (positionToEvaluate.piece === undefined || positionToEvaluate.team !== team)) {
            boardToUpdate[filaIndex + 1][columnaIndex + 1].classAdditional = "threatened";
        }
        positionToEvaluate = boardToUpdate[filaIndex + 1][columnaIndex - 1]
        if (positionToEvaluate && positionToEvaluate.piece === "King" && positionToEvaluate.team !== team) {
            boardToUpdate[filaIndex + 1][columnaIndex - 1].classAdditional = "threatenedKing"
        }
        else if (positionToEvaluate && (positionToEvaluate.piece === undefined || positionToEvaluate.team !== team)) {
            boardToUpdate[filaIndex + 1][columnaIndex - 1].classAdditional = "threatened";
        }
    }
}

function kingJaqueMoves(filaIndex, columnaIndex, team, boardToUpdate) {
    for (let a = -1; a < 2; a++) {
        for (let b = -1; b < 2; b++) {
            const i = filaIndex + a;
            const y = columnaIndex + b;

            if (boardToUpdate[i] && boardToUpdate[i][y]) {
                if (boardToUpdate[i][y].piece === "King" && boardToUpdate[i][y].team !== team) {
                    boardToUpdate[i][y].classAdditional = "threatenedKing";
                } else if (boardToUpdate[i][y].piece === undefined || boardToUpdate[i][y].team !== team) {
                    boardToUpdate[i][y].classAdditional = "threatened";
                }
            }
        }
    }
}