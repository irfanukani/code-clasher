import { Box, Flex } from '@chakra-ui/layout'
import React, { useState } from 'react'
import logo from "../Assets/logo.svg";
import { useHistory, Link, NavLink } from 'react-router-dom';
import { Button } from '@chakra-ui/button';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { AtSignIcon, ChevronLeftIcon, ExternalLinkIcon, LinkIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Avatar } from '@chakra-ui/avatar';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_SUCCESS, LOGOUT } from '../Actions/types';
import { Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from '@chakra-ui/popover';
import { Stack } from '@chakra-ui/layout';
import { StackItem } from '@chakra-ui/layout';
import { createNewGame } from '../Actions/Game/createNewGame';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import { useDisclosure } from '@chakra-ui/hooks';
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';

function AuthNavbar() {
    const history = useHistory();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleRouteChange = () => {
        history.push('/')
    }
    const dispatch = useDispatch();
    const logout = () => {
        dispatch({ type: LOGOUT, payload: {} });
    }

    const [timeRange, setTimeRange] = useState(10);

    const clr = useColorModeValue('#000', '#FFF');
    const icon = useColorModeValue(<MoonIcon />, <SunIcon />);
    const { toggleColorMode } = useColorMode();

    const storedState = useSelector(state => state);
    console.log(storedState);

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    function handleCreateGame() {
        const idx = getRandomIntInclusive(0, storedState?.questions?.length);
        const randomQuestionId = storedState?.questions[idx]?._id;
        console.log(randomQuestionId)
        dispatch(createNewGame(storedState?.userProfile?.profile?.email, timeRange, randomQuestionId));
        history.push('/room/' + JSON.parse(sessionStorage.getItem('gameInfo')).gameId);
    }

    return (
        <Flex align="center" justifyContent="space-between" p="8">
            <Flex align="center" justifyContent="start" >
                <Box onClick={handleRouteChange} style={{ cursor: 'pointer' }} mr="16">
                    <svg width="259" height="35" viewBox="0 0 259 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M49.5 1H1V40H49.5V1Z" stroke={clr} stroke-width="2" />
                        <path d="M1 8.15002H49.5" stroke={clr} stroke-width="2" />
                        <path d="M10.1573 16.275L17.6189 23.75L10.1573 31.55M19.6539 31.55H29.8287" stroke={clr !== "#FFF" ? "red" : "orange"} stroke-width="2" />
                        <path d="M67.036 24.228C67.036 22.324 67.4747 20.616 68.352 19.104C69.248 17.592 70.452 16.416 71.964 15.576C73.4947 14.7173 75.1653 14.288 76.976 14.288C79.048 14.288 80.8867 14.8013 82.492 15.828C84.116 16.836 85.292 18.2733 86.02 20.14H82.184C81.68 19.1133 80.98 18.348 80.084 17.844C79.188 17.34 78.152 17.088 76.976 17.088C75.688 17.088 74.54 17.3773 73.532 17.956C72.524 18.5347 71.7307 19.3653 71.152 20.448C70.592 21.5307 70.312 22.7907 70.312 24.228C70.312 25.6653 70.592 26.9253 71.152 28.008C71.7307 29.0907 72.524 29.9307 73.532 30.528C74.54 31.1067 75.688 31.396 76.976 31.396C78.152 31.396 79.188 31.144 80.084 30.64C80.98 30.136 81.68 29.3707 82.184 28.344H86.02C85.292 30.2107 84.116 31.648 82.492 32.656C80.8867 33.664 79.048 34.168 76.976 34.168C75.1467 34.168 73.476 33.748 71.964 32.908C70.452 32.0493 69.248 30.864 68.352 29.352C67.4747 27.84 67.036 26.132 67.036 24.228ZM96.4483 34.252C94.9923 34.252 93.6763 33.9253 92.5003 33.272C91.3243 32.6 90.4003 31.6667 89.7283 30.472C89.0563 29.2587 88.7203 27.8587 88.7203 26.272C88.7203 24.704 89.0656 23.3133 89.7563 22.1C90.4469 20.8867 91.3896 19.9533 92.5843 19.3C93.7789 18.6467 95.1136 18.32 96.5883 18.32C98.0629 18.32 99.3976 18.6467 100.592 19.3C101.787 19.9533 102.73 20.8867 103.42 22.1C104.111 23.3133 104.456 24.704 104.456 26.272C104.456 27.84 104.102 29.2307 103.392 30.444C102.683 31.6573 101.712 32.6 100.48 33.272C99.2669 33.9253 97.9229 34.252 96.4483 34.252ZM96.4483 31.48C97.2696 31.48 98.0349 31.284 98.7443 30.892C99.4723 30.5 100.06 29.912 100.508 29.128C100.956 28.344 101.18 27.392 101.18 26.272C101.18 25.152 100.966 24.2093 100.536 23.444C100.107 22.66 99.5376 22.072 98.8283 21.68C98.1189 21.288 97.3536 21.092 96.5323 21.092C95.7109 21.092 94.9456 21.288 94.2363 21.68C93.5456 22.072 92.9949 22.66 92.5843 23.444C92.1736 24.2093 91.9683 25.152 91.9683 26.272C91.9683 27.9333 92.3883 29.2213 93.2283 30.136C94.0869 31.032 95.1603 31.48 96.4483 31.48ZM106.548 26.216C106.548 24.6667 106.865 23.2947 107.5 22.1C108.153 20.9053 109.03 19.9813 110.132 19.328C111.252 18.656 112.493 18.32 113.856 18.32C114.864 18.32 115.853 18.544 116.824 18.992C117.813 19.4213 118.597 20 119.176 20.728V13.28H122.396V34H119.176V31.676C118.653 32.4227 117.925 33.0387 116.992 33.524C116.077 34.0093 115.022 34.252 113.828 34.252C112.484 34.252 111.252 33.916 110.132 33.244C109.03 32.5533 108.153 31.6013 107.5 30.388C106.865 29.156 106.548 27.7653 106.548 26.216ZM119.176 26.272C119.176 25.208 118.952 24.284 118.504 23.5C118.074 22.716 117.505 22.1187 116.796 21.708C116.086 21.2973 115.321 21.092 114.5 21.092C113.678 21.092 112.913 21.2973 112.204 21.708C111.494 22.1 110.916 22.688 110.468 23.472C110.038 24.2373 109.824 25.152 109.824 26.216C109.824 27.28 110.038 28.2133 110.468 29.016C110.916 29.8187 111.494 30.4347 112.204 30.864C112.932 31.2747 113.697 31.48 114.5 31.48C115.321 31.48 116.086 31.2747 116.796 30.864C117.505 30.4533 118.074 29.856 118.504 29.072C118.952 28.2693 119.176 27.336 119.176 26.272ZM140.728 25.908C140.728 26.4867 140.691 27.0093 140.616 27.476H128.828C128.922 28.708 129.379 29.6973 130.2 30.444C131.022 31.1907 132.03 31.564 133.224 31.564C134.942 31.564 136.155 30.8453 136.864 29.408H140.308C139.842 30.8267 138.992 31.9933 137.76 32.908C136.547 33.804 135.035 34.252 133.224 34.252C131.75 34.252 130.424 33.9253 129.248 33.272C128.091 32.6 127.176 31.6667 126.504 30.472C125.851 29.2587 125.524 27.8587 125.524 26.272C125.524 24.6853 125.842 23.2947 126.476 22.1C127.13 20.8867 128.035 19.9533 129.192 19.3C130.368 18.6467 131.712 18.32 133.224 18.32C134.68 18.32 135.978 18.6373 137.116 19.272C138.255 19.9067 139.142 20.8027 139.776 21.96C140.411 23.0987 140.728 24.4147 140.728 25.908ZM137.396 24.9C137.378 23.724 136.958 22.7813 136.136 22.072C135.315 21.3627 134.298 21.008 133.084 21.008C131.983 21.008 131.04 21.3627 130.256 22.072C129.472 22.7627 129.006 23.7053 128.856 24.9H137.396ZM150.079 24.228C150.079 22.324 150.518 20.616 151.395 19.104C152.291 17.592 153.495 16.416 155.007 15.576C156.538 14.7173 158.208 14.288 160.019 14.288C162.091 14.288 163.93 14.8013 165.535 15.828C167.159 16.836 168.335 18.2733 169.063 20.14H165.227C164.723 19.1133 164.023 18.348 163.127 17.844C162.231 17.34 161.195 17.088 160.019 17.088C158.731 17.088 157.583 17.3773 156.575 17.956C155.567 18.5347 154.774 19.3653 154.195 20.448C153.635 21.5307 153.355 22.7907 153.355 24.228C153.355 25.6653 153.635 26.9253 154.195 28.008C154.774 29.0907 155.567 29.9307 156.575 30.528C157.583 31.1067 158.731 31.396 160.019 31.396C161.195 31.396 162.231 31.144 163.127 30.64C164.023 30.136 164.723 29.3707 165.227 28.344H169.063C168.335 30.2107 167.159 31.648 165.535 32.656C163.93 33.664 162.091 34.168 160.019 34.168C158.19 34.168 156.519 33.748 155.007 32.908C153.495 32.0493 152.291 30.864 151.395 29.352C150.518 27.84 150.079 26.132 150.079 24.228ZM175.991 13.28V34H172.799V13.28H175.991ZM179.118 26.216C179.118 24.6667 179.435 23.2947 180.07 22.1C180.723 20.9053 181.601 19.9813 182.702 19.328C183.822 18.656 185.054 18.32 186.398 18.32C187.611 18.32 188.666 18.5627 189.562 19.048C190.477 19.5147 191.205 20.1027 191.746 20.812V18.572H194.966V34H191.746V31.704C191.205 32.432 190.467 33.0387 189.534 33.524C188.601 34.0093 187.537 34.252 186.342 34.252C185.017 34.252 183.803 33.916 182.702 33.244C181.601 32.5533 180.723 31.6013 180.07 30.388C179.435 29.156 179.118 27.7653 179.118 26.216ZM191.746 26.272C191.746 25.208 191.522 24.284 191.074 23.5C190.645 22.716 190.075 22.1187 189.366 21.708C188.657 21.2973 187.891 21.092 187.07 21.092C186.249 21.092 185.483 21.2973 184.774 21.708C184.065 22.1 183.486 22.688 183.038 23.472C182.609 24.2373 182.394 25.152 182.394 26.216C182.394 27.28 182.609 28.2133 183.038 29.016C183.486 29.8187 184.065 30.4347 184.774 30.864C185.502 31.2747 186.267 31.48 187.07 31.48C187.891 31.48 188.657 31.2747 189.366 30.864C190.075 30.4533 190.645 29.856 191.074 29.072C191.522 28.2693 191.746 27.336 191.746 26.272ZM204.759 34.252C203.545 34.252 202.453 34.0373 201.483 33.608C200.531 33.16 199.775 32.5627 199.215 31.816C198.655 31.0507 198.356 30.2013 198.319 29.268H201.623C201.679 29.9213 201.987 30.472 202.547 30.92C203.125 31.3493 203.844 31.564 204.703 31.564C205.599 31.564 206.289 31.396 206.775 31.06C207.279 30.7053 207.531 30.2573 207.531 29.716C207.531 29.1373 207.251 28.708 206.691 28.428C206.149 28.148 205.281 27.84 204.087 27.504C202.929 27.1867 201.987 26.8787 201.259 26.58C200.531 26.2813 199.896 25.824 199.355 25.208C198.832 24.592 198.571 23.78 198.571 22.772C198.571 21.9507 198.813 21.204 199.299 20.532C199.784 19.8413 200.475 19.3 201.371 18.908C202.285 18.516 203.331 18.32 204.507 18.32C206.261 18.32 207.671 18.768 208.735 19.664C209.817 20.5413 210.396 21.7453 210.471 23.276H207.279C207.223 22.5853 206.943 22.0347 206.439 21.624C205.935 21.2133 205.253 21.008 204.395 21.008C203.555 21.008 202.911 21.1667 202.463 21.484C202.015 21.8013 201.791 22.2213 201.791 22.744C201.791 23.1547 201.94 23.5 202.239 23.78C202.537 24.06 202.901 24.284 203.331 24.452C203.76 24.6013 204.395 24.7973 205.235 25.04C206.355 25.3387 207.269 25.6467 207.979 25.964C208.707 26.2627 209.332 26.7107 209.855 27.308C210.377 27.9053 210.648 28.6987 210.667 29.688C210.667 30.5653 210.424 31.3493 209.939 32.04C209.453 32.7307 208.763 33.272 207.867 33.664C206.989 34.056 205.953 34.252 204.759 34.252ZM222.096 18.32C223.272 18.32 224.317 18.572 225.232 19.076C226.165 19.58 226.893 20.3267 227.416 21.316C227.957 22.3053 228.228 23.5 228.228 24.9V34H225.064V25.376C225.064 23.9947 224.718 22.94 224.028 22.212C223.337 21.4653 222.394 21.092 221.2 21.092C220.005 21.092 219.053 21.4653 218.344 22.212C217.653 22.94 217.308 23.9947 217.308 25.376V34H214.116V13.28H217.308V20.364C217.849 19.7107 218.53 19.2067 219.352 18.852C220.192 18.4973 221.106 18.32 222.096 18.32ZM246.439 25.908C246.439 26.4867 246.402 27.0093 246.327 27.476H234.539C234.633 28.708 235.09 29.6973 235.911 30.444C236.733 31.1907 237.741 31.564 238.935 31.564C240.653 31.564 241.866 30.8453 242.575 29.408H246.019C245.553 30.8267 244.703 31.9933 243.471 32.908C242.258 33.804 240.746 34.252 238.935 34.252C237.461 34.252 236.135 33.9253 234.959 33.272C233.802 32.6 232.887 31.6667 232.215 30.472C231.562 29.2587 231.235 27.8587 231.235 26.272C231.235 24.6853 231.553 23.2947 232.187 22.1C232.841 20.8867 233.746 19.9533 234.903 19.3C236.079 18.6467 237.423 18.32 238.935 18.32C240.391 18.32 241.689 18.6373 242.827 19.272C243.966 19.9067 244.853 20.8027 245.487 21.96C246.122 23.0987 246.439 24.4147 246.439 25.908ZM243.107 24.9C243.089 23.724 242.669 22.7813 241.847 22.072C241.026 21.3627 240.009 21.008 238.795 21.008C237.694 21.008 236.751 21.3627 235.967 22.072C235.183 22.7627 234.717 23.7053 234.567 24.9H243.107ZM252.772 20.812C253.239 20.028 253.855 19.4213 254.62 18.992C255.404 18.544 256.328 18.32 257.392 18.32V21.624H256.58C255.33 21.624 254.378 21.9413 253.724 22.576C253.09 23.2107 252.772 24.312 252.772 25.88V34H249.58V18.572H252.772V20.812Z" fill={clr} />
                    </svg>

                </Box>
                <Flex alignItems="center" width="200px" justifyContent="space-between">
                    <NavLink to="/" exact activeClassName="active">Problems</NavLink>
                    <NavLink to="/discussion" activeClassName="active">Discussion</NavLink>
                </Flex>
            </Flex>
            <Flex justifyContent="center" alignItems="center">

                <Popover>
                    <PopoverTrigger>
                        <Avatar src={storedState?.userProfile?.profile?.profilePic} size="sm" cursor="pointer" />
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>{storedState?.userProfile?.profile?.email}</PopoverHeader>
                        <PopoverBody>
                            <Stack>

                                <Link to="/profile" className="custom-x"><StackItem p="2" >  <AtSignIcon /> Profile </StackItem></Link>

                                <StackItem p="2" className="custom-x"><ExternalLinkIcon />Friends</StackItem>
                                <StackItem p="2" className="custom-x" onClick={logout}><ChevronLeftIcon />Logout</StackItem>
                            </Stack>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                <Button mx="8" onClick={toggleColorMode}>
                    {icon}
                </Button>
                <Button variant="outline" colorScheme="gray" onClick={onOpen} disabled={storedState?.userProfile?.profile?.email === undefined}> Create a game</Button>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>New Room</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            {/* <FormLabel>Starting Time</FormLabel>
                            <Input type="time" onChange={(e) => setStartTime(e.target.value)} />
                            <FormHelperText>Game will automatically start at this time.</FormHelperText>
                            <FormLabel mt="8">Ending Time</FormLabel>
                            <Input type="time" onChange={(e) => setEndTime(e.target.value)} />
                            <FormHelperText>Results will be announced at this time.</FormHelperText> */}
                            <FormLabel>Time of the round</FormLabel>
                            <Flex justifyContent="space-between" w="60" my="8" mx="auto">
                                <div className={timeRange === 10 ? "select-custom selected" : "select-custom"} onClick={() => setTimeRange(10)}>10 Min</div>
                                <div className={timeRange === 20 ? "select-custom selected" : "select-custom"} onClick={() => setTimeRange(20)}>20 Min</div>
                                <div className={timeRange === 30 ? "select-custom selected" : "select-custom"} onClick={() => setTimeRange(30)}>30 Min</div>
                            </Flex>

                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button onClick={handleCreateGame} >Create Room</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex >
    )
}

export default AuthNavbar
