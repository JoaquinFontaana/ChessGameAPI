export default function moves(board,filaIndex, columnaIndex,piece ,team) {

    function towerMoves() {
        const moves = [];
        let i = filaIndex + 1;
        let y = columnaIndex;
        let enemyPiece = false;
        while (
            i >= 0 &&
            i < board.length &&
            board[i][y] &&
            board[i][y].team !== team &&
            !enemyPiece
        ) {
            if (board[i][y].piece === undefined) moves.push({ fila: i, columna: y, classAdditional: "available" });
            else if (board[i][y].piece && board[i][y].team !== team) {
                moves.push({ fila: i, columna: y, classAdditional: "attackable" });
                enemyPiece = true;
            }
            i++;
        }
        i = filaIndex - 1;
        y = columnaIndex;
        enemyPiece = false;
        while (
            i >= 0 &&
            i < board.length &&
            board[i][y] &&
            board[i][y].team !== team &&
            !enemyPiece
        ) {
            if (board[i][y].piece === undefined) moves.push({ fila: i, columna: y, classAdditional: "available" });
            else if (board[i][y].piece && board[i][y].team !== team) {
                moves.push({ fila: i, columna: y, classAdditional: "attackable" });
                enemyPiece = true;
            }
            i--;
        }
        i = filaIndex;
        y = columnaIndex + 1;
        enemyPiece = false;
        while (
            y >= 0 &&
            y < board.length &&
            board[i][y] &&
            board[i][y].team !== team &&
            !enemyPiece
        ) {
            if (board[i][y].piece === undefined) moves.push({ fila: i, columna: y, classAdditional: "available" });
            else if (board[i][y].piece && board[i][y].team !== team) {
                moves.push({ fila: i, columna: y, classAdditional: "attackable" });
                enemyPiece = true;
            }
            y++;
        }
        i = filaIndex;
        y = columnaIndex - 1;
        enemyPiece = false;
        while (
            y >= 0 &&
            y < board.length &&
            board[i][y] &&
            board[i][y].team !== team &&
            !enemyPiece
        ) {
            if (board[i][y].piece === undefined) moves.push({ fila: i, columna: y, classAdditional: "available" });
            else if (board[i][y].piece && board[i][y].team !== team) {
                moves.push({ fila: i, columna: y, classAdditional: "attackable" });
                enemyPiece = true;
            }
            y--;
        }
        return moves;
    }

    function bishopMoves() {
        const moves = [];
        let i = filaIndex - 1;
        let y = columnaIndex + 1;
        let enemyPiece = false;
        while (
            i >= 0 &&
            i < board.length &&
            y >= 0 &&
            y < board[0].length &&
            board[i][y] &&
            board[i][y].team !== team &&
            !enemyPiece
        ) {
            if (board[i][y].piece === undefined) {
                moves.push({ fila: i, columna: y, classAdditional: "available" });
            } else if (board[i][y].piece && board[i][y].team !== team) {
                moves.push({ fila: i, columna: y, classAdditional: "attackable" });
                enemyPiece = true;
            }
            i--;
            y++;
        }
        i = filaIndex - 1;
        y = columnaIndex - 1;
        enemyPiece = false;
        while (
            i >= 0 &&
            i < board.length &&
            y >= 0 &&
            y < board[0].length &&
            board[i][y] &&
            board[i][y].team !== team &&
            !enemyPiece
        ) {
            if (board[i][y].piece === undefined) {
                moves.push({ fila: i, columna: y, classAdditional: "available" });
            } else if (board[i][y].piece && board[i][y].team !== team) {
                moves.push({ fila: i, columna: y, classAdditional: "attackable" });
                enemyPiece = true;
            }
            i--;
            y--;
        }
        i = filaIndex + 1;
        y = columnaIndex + 1;
        enemyPiece = false;
        while (
            i >= 0 &&
            i < board.length &&
            y >= 0 &&
            y < board[0].length &&
            board[i][y] &&
            board[i][y].team !== team &&
            !enemyPiece
        ) {
            if (board[i][y].piece === undefined) {
                moves.push({ fila: i, columna: y, classAdditional: "available" });
            } else if (board[i][y].piece && board[i][y].team !== team) {
                moves.push({ fila: i, columna: y, classAdditional: "attackable" });
                enemyPiece = true;
            }
            i++;
            y++;
        }
        i = filaIndex + 1;
        y = columnaIndex - 1;
        enemyPiece = false;
        while (
            i >= 0 &&
            i < board.length &&
            y >= 0 &&
            y < board[0].length &&
            board[i][y] &&
            board[i][y].team !== team &&
            !enemyPiece
        ) {
            if (board[i][y].piece === undefined) {
                moves.push({ fila: i, columna: y, classAdditional: "available" });
            } else if (board[i][y].piece && board[i][y].team !== team) {
                moves.push({ fila: i, columna: y, classAdditional: "attackable" });
                enemyPiece = true;
            }
            i++;
            y--;
        }
        return moves;
    }
    function kingMoves() {
        const moves = [
            { fila: -1, columna: -1 },
            { fila: -1, columna: 0 },
            { fila: -1, columna: 1 },
            { fila: 0, columna: -1 },
            { fila: 0, columna: 1 },
            { fila: 1, columna: -1 },
            { fila: 1, columna: 0 },
            { fila: 1, columna: 1 },
        ];

        const possibleMoves = moves.filter(posiciones => {
            const { fila, columna } = posiciones
            const i = filaIndex + fila;
            const y = columnaIndex + columna;

            return (
                i >= 0 &&
                i < board.length &&
                y >= 0 &&
                y < board[0].length &&
                board[i][y].team !== team &&
                board[i][y].classAdditional !== "threatened"
            );
        });

        return possibleMoves.map(posiciones => {
            const { fila, columna } = posiciones
            const i = filaIndex + fila;
            const y = columnaIndex + columna;

            return {
                fila: i,
                columna: y,
                classAdditional: board[i][y].piece ? "attackable" : "available"
            };
        });
    }

    function knightMoves() {
        const moves = [
            { fila: -2, columna: -1 },
            { fila: -2, columna: 1 },
            { fila: -1, columna: -2 },
            { fila: -1, columna: 2 },
            { fila: 1, columna: -2 },
            { fila: 1, columna: 2 },
            { fila: 2, columna: -1 },
            { fila: 2, columna: 1 },
        ];

        const possibleMoves = moves.filter(posiciones => {
            const { fila, columna } = posiciones
            const i = filaIndex + fila;
            const y = columnaIndex + columna;

            return (
                i >= 0 &&
                i < board.length &&
                y >= 0 &&
                y < board[0].length &&
                board[i][y].team !== team
            );
        });

        return possibleMoves.map(posiciones => {
            const { fila, columna } = posiciones
            const i = filaIndex + fila;
            const y = columnaIndex + columna;

            return {
                fila: i,
                columna: y,
                classAdditional: board[i][y].piece ? "attackable" : "available"
            };
        });
    }

    function pawnMoves() {
        const moves = [];
        const attackMoves = [];
        if (team === "White") {
            moves.push({ fila: -1, columna: 0 });
            if (board[filaIndex][columnaIndex].firstMove && board[filaIndex - 1][columnaIndex].piece === undefined) {
                moves.push({ fila: -2, columna: 0 });
            }
            attackMoves.push({ fila: -1, columna: 1 });
            attackMoves.push({ fila: -1, columna: -1 });
        }
        if (team === "Black") {
            moves.push({ fila: 1, columna: 0 });
            if (board[filaIndex][columnaIndex].firstMove && board[filaIndex + 1][columnaIndex].piece === undefined) {
                moves.push({ fila: 2, columna: 0 });
            }
            attackMoves.push({ fila: 1, columna: 1 });
            attackMoves.push({ fila: 1, columna: -1 });
        }

        const possibleMoves = moves.filter(posiciones => {
            const { fila, columna } = posiciones
            const i = filaIndex + fila;
            const y = columnaIndex + columna;

            return (
                i >= 0 &&
                i < board.length &&
                y >= 0 &&
                y < board[0].length &&
                board[i][y] &&
                board[i][y].team !== team
            );
        });
        const attackMovesFiltered = attackMoves.filter(posiciones => {
            const { fila, columna } = posiciones
            const i = filaIndex + fila;
            const y = columnaIndex + columna;

            return (
                i >= 0 &&
                i < board.length &&
                y >= 0 &&
                y < board[0].length &&
                board[i][y] &&
                board[i][y].team !== team &&
                board[i][y].piece !== undefined
            );
        });
        const possibleMovesMapped = possibleMoves.map(posiciones => {
            const { fila, columna } = posiciones
            const i = filaIndex + fila;
            const y = columnaIndex + columna;
            return {
                fila: i,
                columna: y,
                classAdditional: board[i][y].piece ? "" : "available"
            };
        });
        attackMovesFiltered.forEach(posiciones => {
            const { fila, columna } = posiciones
            const i = filaIndex + fila;
            const y = columnaIndex + columna;
            possibleMovesMapped.push({ fila: i, columna: y, classAdditional:  "attackable" });
        });
        return possibleMovesMapped;
    }
    function queenMoves() {
        return [...towerMoves(board), ...bishopMoves(board)];
    }
    switch(piece){
        case "Pawn":
            return pawnMoves();
        case "Knight": 
            return knightMoves();
        case "Bishop":
            return bishopMoves();
        case "Rook":
            return rookMoves();
        case "Queen":
            return queenMoves();
        case "King":
            return kingMoves();
    }
}