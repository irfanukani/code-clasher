export const getGameInfo = (gameInfo = null, action) => {
    const { payload, type } = action;

    switch (type) {
        case 'GAME_CREATED':
            return { ...payload };
        case 'ROOM_DATA_UPDATED':
            return { ...payload }
        default:
            return gameInfo;
    }
}