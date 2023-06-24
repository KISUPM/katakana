import { Box, HStack, Heading } from '@chakra-ui/react'
import React from 'react'
import BackButton from '../Components/BackButton'

export default function Round() {
    return (
        <Box>
            <HStack alignItems={"center"}>
                <BackButton />
                <Heading>Round Mode</Heading>
            </HStack>
        </Box>
    )
}
