import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input'
import { Box, Flex, Grid, Stack, Text } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner';
import { Tooltip } from '@chakra-ui/tooltip';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { exitRoom } from '../Actions/Game/exitRoom';
import { getRoomInfo } from '../Actions/Game/getRoomInfo';
import { joinRoom } from "../Actions/Game/joinRoom"
import { startTheGame } from '../Actions/Game/startGame';
import { getUserProfile } from "../Actions/Profile/getUserProfile"

const useUnload = fn => {
    const cb = React.useRef(fn);

    React.useEffect(() => {
        const onUnload = cb.current;
        window.addEventListener('beforeunload', onUnload);
        return () => {
            window.removeEventListener('beforeunload', onUnload);
        };
    }, [cb]);
};

const Room = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const storedState = useSelector(state => state.gameInfo);
    const profileData = useSelector(state => state)

    let user = JSON.parse(localStorage.getItem('user'));

    if (storedState?.isGameStarted) {
        history.push('/game/' + storedState?.gameId);
    }

    const joinRoomAsync = async () => {
        dispatch(getUserProfile());
        if (!storedState) {
            dispatch(getRoomInfo(window?.location?.href?.split('/')[4]));
        }
        if (profileData) {
            user = JSON.parse(localStorage.getItem('user'));
            // console.log(user);
            dispatch(joinRoom(user?.email, user?.profilePic, window?.location?.href?.split('/')[4]));

        }

    }
    useEffect(() => {
        joinRoomAsync();
    }, []);

    function startGame() {
        dispatch(startTheGame(window?.location?.href?.split('/')[4]))
    }

    useUnload(event => {
        dispatch(exitRoom(profileData?.userProfile?.profile?.email, window?.location?.href?.split('/')[4]))
        event.preventDefault();
    });

    if (storedState === null) {
        return <Grid placeItems="center" h="100vh"><Spinner /></Grid>
    }

    return (
        <Grid>
            <Grid placeItems="center" h="100vh">
                <Flex className="link" position="absolute" top="20" w="96" justifyContent="space-between" alignItems="center">
                    {window.location.href}
                    <Tooltip label="Copy Link" placement="auto-start">
                        <Button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1H7zM5.002 8L5 20h10V8H5.002zM9 6h8v10h2V4H9v2zm-2 5h6v2H7v-2zm0 4h6v2H7v-2z" fill="rgba(50,152,219,1)" /></svg></Button>
                    </Tooltip>
                </Flex>
                <Stack mx="auto">
                    <Flex justifyContent="center">
                        {storedState?.joinedPeople?.map((people) => {
                            return <Avatar src={people.profilePic} size="xl"></Avatar>
                        })}
                    </Flex>
                    <p style={{ textAlign: 'center' }}> {storedState?.joinedPeople?.length || 0} People joined the room.</p>

                </Stack>
                {user?.email === storedState?.hostEmail ? <Button position="absolute" bottom="20" onClick={startGame}>Start Game</Button> : ""}
            </Grid>

        </Grid>
    )
}

export { Room };