import React, { useContext } from 'react'
import { VStack, Button } from "@chakra-ui/react"

import { AppContext } from '../Context/AppContext'

export default function SelectMode() {
    const App = useContext(AppContext);

    const setMode = (mode: string) => {
        App.setMode(mode)
    }

    return (
        <VStack w="100%" h="100%" justifyContent={"center"} alignItems={"center"}>
            <Button w="300px" maxW="80%" colorScheme='blue' onClick={() => { setMode("endless") }}>Endless Mode</Button>
            <Button w="300px" maxW="80%" colorScheme='blue' onClick={() => { setMode("round") }}>Round Mode</Button>
        </VStack>
    )
}
