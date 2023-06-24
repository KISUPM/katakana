import React from 'react'
import { Box, Button, useDisclosure } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    // AlertDialogCloseButton,
} from '@chakra-ui/react'

export default function BackButton() {
    const App = useContext(AppContext);
    const cancelRef = React.useRef(null)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleBack = () => {
        App.setMode("")
    }

    return (
        <Box>
            <Button colorScheme='red' onClick={onOpen}>Back</Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Back To Main Menu
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? If you back, your score will be reset
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={handleBack} ml={3}>
                                Back
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Box>
    )
}
