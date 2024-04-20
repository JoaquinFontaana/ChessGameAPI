import INITIALGAME from "../consts/INITIALGAME";
export function tryMatchUsers(waitingUsers){
    if(waitingUsers.lenght >= 2){
        const user1 = waitingUsers.pop;
        const user2 = waitingUsers.pop

        const roomName = `room-${user1.socket.id}-${user2.socket.id}`
        user1.socket.join(roomName);
        user2.socket.join(roomName);

        user1.socket.emmit("matched", {room: roomName,opponentUsername:user2.username})
        user2.socket.emmit("matched", {room: roomName,opponentUsername:user1.username})
        
        io.sockets.adapter.room[roomName].gameData = INITIALGAME
    }
}