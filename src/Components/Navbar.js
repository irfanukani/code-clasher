import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Box, Flex, Button } from '@chakra-ui/react';

import React from 'react'

const Navbar = () => {
    const { toggleColorMode } = useColorMode();
    const icon = useColorModeValue(<MoonIcon />, <SunIcon />);
    return (
        <Flex bg="transparent" h="14" padding="8">
            <Box flex="1" >
                <Text fontSize="xl">Code Clasher</Text>
            </Box>
            <Box>
                <Button size="sm" onClick={toggleColorMode}>
                    {icon}
                </Button>
            </Box>
        </Flex>
    )
}

export default Navbar
