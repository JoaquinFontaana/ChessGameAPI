import STARTEDBOARD from "./BOARD"
import BLACKPIECES from "./BLACKPIECES"
import WHITEPIECES from "./WHITEPIECES"
const INITIALGAME = {
    board:STARTEDBOARD,
    turn:"White",
    blackPieces:BLACKPIECES,
    whitePieces:WHITEPIECES,
    whiteKingPosition:{fila:7,columna:4},
    blackKingPosition:{fila:0,columna:4}
}
export default INITIALGAME