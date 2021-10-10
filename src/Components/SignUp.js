import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Flex, Grid, Stack, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react'
import AnimatedTree from './AnimatedTree';
import _ from "lodash"
import axios from "axios"
import { useDispatch } from 'react-redux';
import { BASE_URL } from '../Hooks/Constants';
import { CheckIcon } from '@chakra-ui/icons';
import { Spinner } from '@chakra-ui/spinner';
import { signUp } from "../Actions/Auth/signUp"


const SignUp = () => {
    const [user, setUser] = useState({});
    const [isValidUserName, setIsValidUserName] = useState(false);
    const [userName, setUserName] = useState('');

    const callApi = (value = "") => {
        setloading(true);
        axios.post(BASE_URL + '/user/isUserExist', { userName: value }).then((res) => {
            setIsValidUserName(!(res.data.exist) && value.length > 4);
            setloading(false)
        })
    };

    const [loading, setloading] = useState(false);
    const dispatch = useDispatch();
    const [debouncedCallApi] = useState(() => _.debounce(callApi, 400));



    function handleChange2(e) {
        setUserName(e.target.value?.toLowerCase());
        debouncedCallApi(e.target?.value);
    }
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }



    const handleSubmit = () => {
        dispatch(signUp({ ...user, userName: userName }));
    }



    return (
        <Grid templateColumns="1fr 1fr">
            <Stack alignItems="start" justifyContent="start" padding="8" mx="20">
                <Text fontSize="xl" mt="90px">Continue to <span className="logo">Code Clasher </span></Text>
                <Stack spacing={8} pt="40px">
                    <Flex alignItems="center" position="relative">
                        <Input placeholder="Username" value={userName} size="md" mt="3" w="390px" borderColor={isValidUserName ? "green.400" : "gray"} onChange={handleChange2} />
                        {isValidUserName ? <CheckIcon color="green.500" position="absolute" top="6" right="2" /> : loading && <Spinner position="absolute" top="5" right="2" />}
                    </Flex>
                    <Input placeholder="Email" onChange={(e) => handleChange(e)} borderColor="gray" size="md" w="390px" type="email" name="email" required />
                    <Input placeholder="Password" onChange={(e) => handleChange(e)} borderColor="gray" size="md" w="390px" type="password" name="password" required />
                    <Button type="submit" onClick={handleSubmit}>Sign Up</Button>
                </Stack>
            </Stack>
            <Stack minH="90vh" mt="95px" alignItems="start" justifyContent="start" padding="8">
                <AnimatedTree></AnimatedTree>
            </Stack>
        </Grid >
    );
}

export default SignUp
