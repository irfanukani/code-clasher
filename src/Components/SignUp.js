import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Flex, Grid, Stack, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react'
import AnimatedTree from './AnimatedTree';
import { EmailIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { createError } from '../Actions/Errors/handleErrors';
import { isValid } from '../Utilities/validator';


const SignUp = () => {
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
        // dispatch(isValid(user));
    }



    return (
        <Grid templateColumns="1fr 1fr">
            <Stack alignItems="start" justifyContent="start" padding="8">
                <Text fontSize="xl" mt="90px">Continue to <span className="logo">Code Clasher </span></Text>
                <Stack spacing={8} pt="40px">
                    <Input placeholder="Email" onChange={(e) => handleChange(e)} size="md" w="390px" type="email" name="email" required />
                    <Input placeholder="Password" onChange={(e) => handleChange(e)} size="md" w="390px" type="password" name="password" required />
                    <Button type="submit" onClick={handleSubmit}>Sign Up</Button>

                    {/* <Flex style={{ cursor: 'pointer' }} border="1px solid purple" p="2" alignItems="center" justifyContent="center"> <img src={googleIcon} height="30" width="30" alt="" /> &nbsp; &nbsp; Continue with Google</Flex> */}
                </Stack>
            </Stack>
            <Stack minH="90vh" mt="95px" alignItems="start" justifyContent="start" padding="8">
                <AnimatedTree></AnimatedTree>
            </Stack>
        </Grid >
    );
}

export default SignUp
