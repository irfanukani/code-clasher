import { Input } from '@chakra-ui/input'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useAPI } from '../Hooks/UseAPI';
import _ from 'lodash';
import axios from 'axios';
import { BASE_URL } from '../Hooks/Constants';
import { updateProfile } from "../Actions/Profile/updateProfile"
import { CheckIcon } from '@chakra-ui/icons';
import { Spinner } from '@chakra-ui/spinner';
import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';

const Profile = () => {

    const [isValidUserName, setIsValidUserName] = useState(false);
    const [userName, setUserName] = useState('');
    const [loading, setloading] = useState(false);

    const callApi = (value = "") => {
        setloading(true);
        axios.post(BASE_URL + '/user/isUserExist', { userName: value }).then((res) => {
            setIsValidUserName(!(res.data.exist) && value.length > 4);
            setloading(false)
        })
    };
    const dispatch = useDispatch();
    const [debouncedCallApi] = useState(() => _.debounce(callApi, 400));
    const [userImage, setUserImage] = useState(null);
    function handleChange(e) {
        setUserName(e.target.value)
        debouncedCallApi(e.target.value);
    }

    function handleSubmit() {
        dispatch(updateProfile({ profileImage: userImage, username: userName }));
    }

    return (
        <Box w="400px" h="100vh" mx="auto" mt="16">
            <Flex justifyContent='center' alignItems="center" direction="column" mt="12">
                <Avatar name={userName} src={userImage ? URL.createObjectURL(userImage) : ''} />
                <input type="file" id="upload-file" hidden accept="image/png, image/jpeg , image/jpg" onChange={(e) => { setUserImage(e.target.files[0]); console.log(e.target.files[0]) }} />
                <label for="upload-file" style={{ cursor: 'pointer', marginTop: '8px', color: 'gray' }}>Change Image</label>
            </Flex>
            <Text color="gray" mt="16">Select Username</Text>
            <Flex alignItems="center" position="relative">
                <Input variant="filled" placeholder="Filled" mt="3" outlineColor="transparent" borderColor={isValidUserName ? "green.400" : "transparent"} onChange={handleChange} />
                {isValidUserName ? <CheckIcon color="green.500" position="absolute" top="6" right="2" /> : loading && <Spinner position="absolute" top="5" right="2" />}
            </Flex>

            <Flex alignItems="center" justifyContent="center" mt="40">
                <Button onClick={handleSubmit}>🚀 Let's Get Started</Button>
            </Flex>
        </Box>
    )
}
export default Profile

