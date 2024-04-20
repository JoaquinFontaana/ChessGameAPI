import checkJaque from "../helpers/checkJaque";
import Game from "../models/Game";
import updateBoard from "../helpers/updateBoard";
import { tryMatchUsers } from "../helpers/tryMatch";

function initSocket(io) {
    let waitingUsers = [];

    io.on('connection', (socket) => {
        const sessionToken = socket.handshake.query.token;

        // Validar token 
        if (!isValidSession(sessionToken)) {
            socket.disconnect();
            return;
        }

        const username = getUsernameByToken(sessionToken);

        // Agregar usuario a la lista de espera
        waitingUsers.push({
            socket: socket,
            username: username
        });

        // Intentar hacer match
        tryMatchUsers(waitingUsers);

        socket.on("pieceClicked", ({ clickedPiece, team }) => {
            handlePieceSelected(socket, clickedPiece, team);
        });

        socket.on("move", ({ toFilaIndex, toColumnaIndex, fromColumnaIndex, fromFilaIndex, team }) => {
            handleMove(socket, toFilaIndex, toColumnaIndex, fromColumnaIndex, fromFilaIndex, team);
        });
    });
}
    function handlePieceSelected(socket, clickedPiece, team) {
        const roomName = getRoomNameBySocket(socket);
        const roomData = {...io.sockets.adapter.rooms[roomName].gameData};

        if (roomData.game && roomData.game.playerTurn === team) {
            const { board, blackPieces, whitePieces } = roomData;

            const boardWithPossibleMoves = showMovements(board, blackPieces, whitePieces, clickedPiece, team);

            // Emitir los movimientos posibles al cliente
            socket.emit('possibleMoves', { board: boardWithPossibleMoves });
        }
    }

    function handleMove(socket, toFilaIndex, toColumnaIndex, fromColumnaIndex, fromFilaIndex, team) {
        const roomName = getRoomNameBySocket(socket);
        const roomData = io.sockets.adapter.rooms[roomName].gameData;

        if (roomData.game && roomData.game.playerTurn === team) {
            const { board, blackPieces, whitePieces,whiteKingPosition,blackKingPosition } = roomData.game;

            if (checkMove(toFilaIndex, toColumnaIndex, fromColumnaIndex, fromFilaIndex, team, board,whiteKingPosition,blackKingPosition,whitePieces,blackPieces)) {
                // Actualizar tablero y data de la room
                board[toFilaIndex][toColumnaIndex] = { ...board[fromFilaIndex][fromColumnaIndex] };

                // Cambiar turno
                roomData.game.playerTurn = team === 'white' ? 'black' : 'white';

                const enemyTeam = team === 'white' ? 'black' : 'white';
                enemyKingPosition = team === 'white' ? blackKingPosition : whiteKingPosition
                if(checkJaque(board,enemyTeam,enemyKingPosition)){
                    io.to(roomName).emit("jaque",{team:enemyTeam})
                }
                // Emitir evento de tablero actualizado y cambio de turno
                io.to(roomName).emit('updateBoard', { board: board, turn: roomData.game.playerTurn });
            } else {
                socket.emit('invalidMove', { message: "Movimiento inválido" });
            }
        }
    }

    function getUsernameByToken(token) {
        return token.username;
    }

    function getRoomNameBySocket(socket) {
        // Implementa la obtención del nombre de la habitación basado en el socket aquí
        // Retorna el nombre de la habitación
        return `room-${socket.id}`;
    }