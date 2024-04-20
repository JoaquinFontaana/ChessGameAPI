const BLACKPIECES =[
    { piece: "Rook", fila:0,columna:0  },
    { piece: "Knight", fila:0,columna:1  },
    { piece: "Bishop", fila:0,columna:2  },
    { piece: "Queen",fila:0,columna:3  },
    { piece: "King", fila:0,columna:4  },
    { piece: "Bishop", fila:0,columna:5  },
    { piece: "Knight", fila:0,columna:6 },
    { piece: "Rook", fila:0,columna:7 },
]
for(let i = 0; i < 8; i++){
    BLACKPIECES.push({ piece: "Pawn",fila:1,columna:i, firstMove:true  })
}
export default BLACKPIECES