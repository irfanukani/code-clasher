import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Flex, Grid, Stack, Text } from '@chakra-ui/layout';
import React from 'react'
import AnimatedTree from './AnimatedTree';
import googleIcon from '../Assets/googleIcon.png';

const Login = () => {
    return (
        <Grid templateColumns="1fr 1fr">
            <Stack minH="90vh" alignItems="start" justifyContent="start" padding="8">
                <Text fontSize="xl" mt="90px">Continue to <span className="logo">Code Clasher </span></Text>
                <Stack spacing={3} pt="40px">
                    <Input placeholder="Email" size="md" w="390px" type="email" required />
                    <Input placeholder="Password" size="md" w="390px" type="password" required />
                    <Text style={{ cursor: 'pointer' }} fontSize="sm" color="blue.400" align="right">Forget Password?</Text>
                    <Button type="submit">Log In</Button>
                    <Text fontSize="lg" align="center" opacity="0.8" pt="8px">- OR -</Text>
                    <Flex> <img src={googleIcon} height="8" width="40" alt="" /> Sign Up using Google</Flex>
                </Stack>

            </Stack>
            <Stack minH="90vh" mt="95px" alignItems="start" justifyContent="start" padding="8">
                <AnimatedTree></AnimatedTree>
            </Stack>
        </Grid>
    );
}

export default Login
