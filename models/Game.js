import {model, Schema} from 'mongoose';
const GameSchema = new Schema({
    gameSession:{
        type: String,
        required: true
    },
    board:{
        type: Array,
        required: true
    },
    playerTurn:{
        type: String,
        required: true,
        default: "white",
    },
    whitePieces:{
        type: Array,
        required: true
    },
    blackPieces:{
        type: Array,
        required: true,
    },
    blackPlayer:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    blackPlayer:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    whiteKingPosition:{
        type: Object,
        required: true,
        default: {fila: 7, columna: 4}
    },
    blackKingPosition:{
        type: Object,
        required: true,
        default: {fila: 0, columna: 4}
    },
    whiteKingThreatened:{
        type: Boolean,
        required: true,
        default: false
    },
    blackKingThreatened:{
        type: Boolean,
        required: true,
        default: false
    },
})