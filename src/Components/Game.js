import { Button } from '@chakra-ui/button'
import { Box, Divider, Flex, Grid, Spacer, Text } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { submit } from '../Actions/Game/submit'
import { useAPI } from '../Hooks/UseAPI'
import { CustomEditor } from "./Editor"

function Game() {
    const path = window?.location?.href
    const gameInfo = useSelector(state => state.gameInfo);
    const exampleInput = `4\n5 4 9 7 \n4 5 8`
    const [question, setQuestion] = useState("");

    const FetchQuestion = async () => {
        console.log(gameInfo);
        const { data } = await useAPI(`/ques/${gameInfo?.questionId}`, "GET");
        if (data) {
            console.log(data?.data[0])
            setQuestion(data.data[0]);
        }
    }

    const dispatch = useDispatch();
    const storedState = useSelector(state => state)
    const submitCode = () => {
        dispatch(submit(storedState.code));
    }

    useEffect(() => {
        FetchQuestion();
    }, [])

    if (question == "") {
        return <Grid placeItems="center" h="100vh"><Spinner /></Grid>
    }

    return (
        <div>
            <Divider orientation="horizontal" mb="4" />
            <Grid templateColumns="repeat(2, 1fr)" gap={6} fontFamily="monospace">
                <Box w="100%" h="80vh" overflow="scroll">
                    <Flex alignItems="center">
                        <Text fontSize="2xl" px="8">{question?.queName}</Text>
                        <Spacer />
                        {/* <Button colorScheme="whatsapp" px="8" mx="4"> Run</Button> */}
                        {path?.split('/')?.includes('game') && <Button px="8" onClick={submitCode}>Submit</Button>}
                    </Flex>
                    <Box px="8" mt="14" >
                        <div className="question" dangerouslySetInnerHTML={{ __html: question?.probStatement }}></div>
                        <br />
                        <div className="question"><h3>Example Input : </h3><div dangerouslySetInnerHTML={{ __html: question?.input }}></div>
                        </div>
                        <div className="question" style={{ paddingBottom: "100px" }}><h3>Example Output : </h3><div dangerouslySetInnerHTML={{ __html: question?.output }}></div>
                        </div>
                    </Box>
                </Box>
                <Box w="100%" h="80vh" border="1px" borderColor="blackAlpha.200" shadow="2xl" px="4" borderRadius="lg" overflow="scroll">
                    <CustomEditor />
                </Box>
            </Grid >
        </div >
    )
}

export default Game
