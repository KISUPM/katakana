import { Box, Button, Grid, HStack, Heading, Text } from '@chakra-ui/react'
import BackButton from '../Components/BackButton'
import { AllWriteKata, AllReadKata } from '../data/All'
import { useEffect, useState } from 'react'

export default function Round() {

    const read = [...AllReadKata]
    const [write, setWrite] = useState<any[]>([...AllWriteKata])


    const [playerAnswer, setPlayerAnswer] = useState<{ r: string, w: string }[]>([]);
    const [question, setQuestion] = useState("");
    const [count, setCount] = useState(0);

    const popAlp = () => {
        const rIndex = Math.floor(Math.random() * write.length)
        const clone = [...write]
        const pop = clone.splice(rIndex, 1)[0]
        setWrite(clone)
        setQuestion(pop);
    }

    const selectAnswer = (event: any) => {
        popAlp();
        setCount(count + 1);
        const elem = event.target as HTMLElement;
        const ans = elem.innerHTML;
        elem.style.visibility = "hidden"
        setPlayerAnswer([...playerAnswer, { r: ans, w: question }])
        // console.log(question, ans)
    }

    useEffect(() => {
        popAlp();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Box>
            <HStack alignItems={"center"}>
                <BackButton />
                <Heading>Round Mode</Heading>
            </HStack>

            <Box>
                {/* Question */}
                <Box mx="auto" mb="2rem">
                    {/* <Text>{count}</Text> */}
                    <Heading textAlign={"center"} fontSize={"5rem"}>{question}</Heading>
                    {/* <Text> {write.length}</Text> */}
                </Box>

                {/* choice */}
                {
                    count !== 46 &&
                    <Box>
                        <Grid
                            w="fit-content"
                            m="auto"
                            templateColumns={{
                                "6s": "repeat(5,1fr)",
                                "5s": "repeat(5,1fr)",
                                "4s": "repeat(5,1fr)",
                                "3s": "repeat(5,1fr)",
                                "2s": "repeat(5,1fr)",
                                "1s": "repeat(5,1fr)",
                                "s": "repeat(5,1fr)",
                                "m": "repeat(10,1fr)",
                                "l": "repeat(10,1fr)",
                                "1l": "repeat(10,1fr)",
                                "2l": "repeat(10,1fr)",
                                "3l": "repeat(10,1fr)",
                                "4l": "repeat(10,1fr)",
                                "5l": "repeat(10,1fr)",
                                "6l": "repeat(10,1fr)",
                            }}
                            gap="20px">
                            {
                                read.map((i, index) => {
                                    return (
                                        <Button key={index} onClick={selectAnswer} colorScheme='blue'>
                                            {i}
                                        </Button>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                }

                {/* Answer */}
                {
                    count === 46 &&
                    <Box p="20px" w="fit-content" m="auto">
                        <Grid
                            w="fit-content"
                            m="auto"
                            templateColumns={{
                                "6s": "repeat(3,1fr)",
                                "5s": "repeat(3,1fr)",
                                "4s": "repeat(3,1fr)",
                                "3s": "repeat(3,1fr)",
                                "2s": "repeat(3,1fr)",
                                "1s": "repeat(5,1fr)",
                                "s": "repeat(5,1fr)",
                                "m": "repeat(10,1fr)",
                                "l": "repeat(10,1fr)",
                                "1l": "repeat(10,1fr)",
                                "2l": "repeat(10,1fr)",
                                "3l": "repeat(10,1fr)",
                                "4l": "repeat(10,1fr)",
                                "5l": "repeat(10,1fr)",
                                "6l": "repeat(10,1fr)",
                            }}
                            gap="10px">
                            {
                                playerAnswer.map((i: { r: string, w: string }, index) => {

                                    const ansWrite = AllWriteKata.indexOf(i.w)
                                    const ansRead = AllReadKata[ansWrite]
                                    const correct = ansRead === i.r
                                    return (
                                        <Box key={index}
                                            border={`1px solid ${correct ? "green" : "red"}`}
                                            p="1rem"
                                        >
                                            <Text>
                                                <Text as="span" fontWeight={"bold"}>{i.w} : {i.r}</Text>
                                                {
                                                    correct ?
                                                        " ✓ "
                                                        :
                                                        ` ✕ → ${i.w} : ${ansRead}`
                                                }
                                            </Text>
                                        </Box>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                }

            </Box>
        </Box>
    )
}
