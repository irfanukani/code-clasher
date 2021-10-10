import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input'
import { Box, Flex, Grid, Stack, Text } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner';
import { Tooltip } from '@chakra-ui/tooltip';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { exitRoom } from '../Actions/Game/exitRoom';
import { getRoomInfo } from '../Actions/Game/getRoomInfo';
import { joinRoom } from "../Actions/Game/joinRoom"
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
    const storedState = useSelector(state => state.gameInfo);
    const profileData = useSelector(state => state)
    useEffect(() => {
        dispatch(getUserProfile())
        if (!storedState) {
            dispatch(getRoomInfo(window?.location?.href?.split('/')[4]));
        }

        dispatch(joinRoom(profileData?.userProfile?.profile?.email, profileData?.userProfile?.profile?.profilePic, window?.location?.href?.split('/')[4]));
    }, []);

    useUnload(event => {
        dispatch(exitRoom(profileData?.userProfile?.profile?.email, window?.location?.href?.split('/')[4]))
        event.preventDefault();
    });

    if (storedState === null) {
        return <Grid placeItems="center" h="100vh"><Spinner /></Grid>
    }

    return (
        <Grid templateColumns="3fr 1fr">
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
                <Button position="absolute" bottom="20">Start Game</Button>
            </Grid>
            <Box h="100vh" p="8" fontFamily="mono" position="relative">
                <Text fontSize="xl" fontWeight="bold">Live Chat : </Text>
                <Box mt="2" shadow="xl" height="80vh" overflow="scroll">
                </Box>
                <Flex position="absolute" bottom="3" alignItems="center" justifyContent="space-between" w="72">
                    <Input type="text" shadow="xl"></Input>
                    &nbsp;&nbsp;
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" "/></svg> */}
                    <svg style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="rgba(84,72,251,1)" /></svg>
                </Flex>
            </Box>
        </Grid>
    )
}

export { Room };