
const WHITEPIECES =
    [
        { piece: "Rook", fila:7,columna:0  },
        { piece: "Knight", fila:7,columna:1  },
        { piece: "Bishop", fila:7,columna:2  },
        { piece: "Queen",fila:7,columna:3  },
        { piece: "King", fila:7,columna:4  },
        { piece: "Bishop", fila:7,columna:5  },
        { piece: "Knight", fila:7,columna:6 },
        { piece: "Rook", fila:7,columna:7 },
]
for(let i = 0; i < 8; i++){
    WHITEPIECES.push({ piece: "Pawn",fila:6,columna:i, firstMove:true  })
}
export default WHITEPIECES