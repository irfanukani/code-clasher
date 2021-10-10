import { Button } from '@chakra-ui/button'
import { Box, Divider, Flex, Grid, Spacer, Text } from '@chakra-ui/layout'
import React from 'react'
import { CustomEditor } from "./Editor"

function Game() {
    const path = window?.location?.href
    const exampleInput = `4\n5 4 9 7 \n4 5 8`
    return (
        <div>

            <Divider orientation="horizontal" mb="4" />
            <Grid templateColumns="repeat(2, 1fr)" gap={6} fontFamily="monospace">
                <Box w="100%" h="80vh" >
                    <Flex alignItems="center">
                        <Text fontSize="2xl" px="8">Alice And BoB</Text>
                        <Spacer />
                        <Button colorScheme="whatsapp" px="8" mx="4"> Run</Button>
                        {path?.split('/')?.includes('game') && <Button px="8">Submit</Button>}
                    </Flex>
                    <Box px="8" mt="14">
                        <Text fontSize="md"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Hic rem beatae, laborum repellendus tempore deleniti impedit perferendis quibusdam quae cum delectus? Itaque sunt, nisi deserunt doloremque dolorum, quod quam mollitia laborum ducimus temporibus suscipit debitis pariatur officiis omnis est provident voluptates. Ab possimus repudiandae error sequi minus. Laudantium, incidunt recusandae?
                        </Text>
                        <br /><br />
                        <Text fontSize="xl" fontWeight="semibold">
                            Example Input Format
                            <Divider />
                            <Text fontWeight="thin">
                                <pre >
                                    {exampleInput}
                                </pre>
                            </Text>
                        </Text>
                        <br />
                        <Text fontSize="xl" fontWeight="semibold">
                            Example Output Format
                            <Divider />
                            <Text fontWeight="thin">
                                <pre >
                                    {`Hello World`}
                                </pre>
                            </Text>
                        </Text>
                    </Box>
                </Box>
                <Box w="100%" h="80vh" border="1px" borderColor="blackAlpha.200" shadow="2xl" px="4" borderRadius="lg" overflow="scroll">
                    <CustomEditor />
                </Box>
            </Grid>
        </div>
    )
}

export default Game
