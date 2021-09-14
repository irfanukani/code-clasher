import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Flex, Grid, Stack, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react'
import AnimatedTree from './AnimatedTree';
import { EmailIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { createError } from '../Actions/Errors/handleErrors';
import { isValid } from '../Utilities/validator';
import { useHistory } from 'react-router';


const Login = () => {
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
        dispatch(isValid(user));
    }

    const handleNavigation = () => {
        history.push('/signup')
    }



    return (
        <Grid templateColumns="1fr 1fr">
            <Stack alignItems="start" justifyContent="start" padding="8">
                <Text fontSize="xl" mt="90px">Continue to <span className="logo">Code Clasher </span></Text>
                <Stack spacing={3} pt="40px">
                    <Input placeholder="Email" onChange={(e) => handleChange(e)} size="md" w="390px" type="email" name="email" required />
                    <Input placeholder="Password" onChange={(e) => handleChange(e)} size="md" w="390px" type="password" name="password" required />
                    <Text style={{ cursor: 'pointer' }} fontSize="sm" color="blue.400" align="right">Forget Password?</Text>
                    <Button type="submit" onClick={handleSubmit}>Log In</Button>
                    <Text fontSize="lg" align="center" opacity="0.8" pt="8px">- OR -</Text>
                    {/* <Flex style={{ cursor: 'pointer' }} border="1px solid purple" p="2" alignItems="center" justifyContent="center"> <img src={googleIcon} height="30" width="30" alt="" /> &nbsp; &nbsp; Continue with Google</Flex> */}
                    <Flex onClick={() => { handleNavigation() }} style={{ cursor: 'pointer' }} border="1px solid gray" p="2" alignItems="center" justifyContent="center"> <EmailIcon /> &nbsp; &nbsp; Sign Up Using Email</Flex>
                </Stack>
            </Stack>
            <Stack minH="90vh" mt="95px" alignItems="start" justifyContent="start" padding="8">
                <AnimatedTree></AnimatedTree>
            </Stack>
        </Grid >
    );
}

export default Login
