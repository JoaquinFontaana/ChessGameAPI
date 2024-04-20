const STARTEDBOARD = [
    [
        { piece: "Rook", team: "Black", classAdditional: "", firstMove:true },
        { piece: "Knight", team: "Black", classAdditional: "" },
        { piece: "Bishop", team: "Black", classAdditional: "" },
        { piece: "Queen", team: "Black", classAdditional: "" },
        { piece: "King", team: "Black", classAdditional: "" , firstMove:true},
        { piece: "Bishop", team: "Black", classAdditional: "" },
        { piece: "Knight", team: "Black", classAdditional: "" },
        { piece: "Rook", team: "Black", classAdditional: "" , firstMove:true},
    ],
    Array.from({ length: 8 }, () => ({ piece: "Pawn", team: "Black", classAdditional: "",firstMove:true })),
    Array.from({ length: 8 }, () => ({ piece: undefined, team: undefined, classAdditional: "" })),
    Array.from({ length: 8 }, () => ({ piece: undefined, team: undefined, classAdditional: "" })),
    Array.from({ length: 8 }, () => ({ piece: undefined, team: undefined, classAdditional: "" })),
    Array.from({ length: 8 }, () => ({ piece: undefined, team: undefined, classAdditional: "" })),
    Array.from({ length: 8 }, () => ({ piece: "Pawn", team: "White", classAdditional: "", firstMove:true  })),
    [
        { piece: "Rook", team: "White", classAdditional: "", firstMove:true },
        { piece: "Knight", team: "White", classAdditional: "" },
        { piece: "Bishop", team: "White", classAdditional: "" },
        { piece: "Queen", team: "White", classAdditional: "" },
        { piece: "King", team: "White", classAdditional: "", firstMove:true},
        { piece: "Bishop", team: "White", classAdditional: "" },
        { piece: "Knight", team: "White", classAdditional: "" },
        { piece: "Rook", team: "White", classAdditional: "", firstMove:true},
    ],
];
export default STARTEDBOARD;