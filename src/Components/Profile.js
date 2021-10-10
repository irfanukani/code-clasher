
import { Box, Flex, Text } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import _ from 'lodash';

import { updateProfile } from "../Actions/Profile/updateProfile"

import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';


const Profile = () => {
    const storedState = useSelector(state => state);
    const [userImage, setUserImage] = useState(null);
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        setUserName(storedState?.userProfile?.profile?.userName);
    }, [storedState])

    function handleSubmit() {
        console.log(storedState.userProfile.profile)
        dispatch(updateProfile({ profileImage: userImage, userName: userName }));
    }

    return (
        <Box w="400px" h="100vh" mx="auto" mt="16">
            <Flex justifyContent='center' alignItems="center" direction="column" mt="12">
                <Avatar src={userImage ? URL.createObjectURL(userImage) : ''} />
                <input type="file" id="upload-file" hidden accept="image/png, image/jpeg , image/jpg" onChange={(e) => { setUserImage(e.target.files[0]); console.log(e.target.files[0]) }} />
                <label for="upload-file" style={{ cursor: 'pointer', marginTop: '8px', color: 'gray' }}>Change Image</label>
            </Flex>

            <Flex alignItems="center" justifyContent="center" mt="40">
                <Button onClick={handleSubmit}>🚀 Let's Get Started</Button>
            </Flex>
        </Box>
    )
}
export default Profile

