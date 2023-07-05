import { useContext, useEffect, useState } from 'react'
import { Box, Button, Grid, Heading, HStack, Text } from "@chakra-ui/react";
import BackButton from '../Components/BackButton';

import { ScoreContext } from '../Context/ScoreContext';
import { AppContext } from '../Context/AppContext';

import { AllReadKata, AllWriteKata } from '../data/All';

export default function Endless() {
    const Score = useContext(ScoreContext);
    const App = useContext(AppContext)
    const [isShowAnswer, setIsShowAnswer] = useState(false)
    const [isCorrect, setIsCorrect] = useState("");
    const [disableAnswer, setDisableAnswer] = useState(false);
    const read = AllReadKata;
    const write = AllWriteKata;

    const sleep = (s: number) => {
        return new Promise(resolve => setTimeout(resolve, s * 1000))
    }

    const randomQuestion = () => {
        const rindex = Math.floor(Math.random() * read.length)
        const question = write[rindex]
        const answer = read[rindex]

        // const numChoice = Math.floor(Score.scoreGet / 10) + 1;
        const numChoice = 10;
        let choice: number[] = [rindex]

        let i = 0;
        while (i < numChoice && i < read.length) {
            const rChoiceIndex = Math.floor(Math.random() * read.length)
            if (!choice.includes(rChoiceIndex)) {
                choice.push(rChoiceIndex)
                i += 1;
            }
        }

        choice = shuffleChoice(choice);

        const choiceRead: string[] = [...choice.map(i => { return read[i] as string })]
        Score.setQuestionAnswer(question, answer);
        Score.setChoice(choiceRead);
        // console.clear()
        // console.log(choice)
        // choice.forEach(i=>console.log(read[i]))
        // console.log(choiceRead);
        // console.log(question, answer)
    }

    const shuffleChoice = (array: number[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const initial = () => {
        Score.reset();
        randomQuestion();

    }

    useEffect(() => {
        initial();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [App.mode])

    const chooseAnswer = async (answer: string) => {
        Score.checkAnswer(answer) ? setIsCorrect("0,255,0") : setIsCorrect("255,0,0");
        setIsShowAnswer(true)
        setDisableAnswer(true)
        await sleep(1.5)
        setDisableAnswer(false)
        setIsShowAnswer(false)
        randomQuestion();
    }

    return (
        <Box>
            <HStack>
                <BackButton />
                <Heading>Endless Mode</Heading>
            </HStack>

            <Box mt="5rem">
                {/* Score */}
                <Box w="fit-content" m="auto" textAlign={"center"}>
                    <Text>correct / all </Text>
                    <Text>{Score.scoreGet} / {Score.scoreAll} </Text>
                </Box>

                {/* Question */}
                <Box>
                    <Heading fontSize={"10rem"} textAlign={"center"}>
                        {Score.question}
                    </Heading>
                </Box>
                {/* Choice */}
                <Box position="relative">
                    {/* Answer */}
                    <Box
                        w="fit-content" textAlign={"center"}
                        p="2rem" background={`rgba(${isCorrect},0.8)`}
                        border={`1px solid rgba(${isCorrect})`}
                        mx="auto" my="0.5rem"
                        borderRadius={"10px"}
                        visibility={isShowAnswer ? "visible" : "hidden"}
                        color="white"
                        position="absolute"
                        left="50%"
                        top="50%"
                        transform={"translate(-50%,-50%)"}
                        zIndex={1}
                    >
                        The Answer : {" "}
                        {Score.answer}
                    </Box>
                    <Grid templateColumns={`repeat(${Score.choice.length <= 5 ? Score.choice.length : 5},1fr)`} gap="1rem" maxW="100vw" m="auto" mx="0.25rem">
                        {
                            Score.choice.map((i, index) => {
                                return (
                                    //<Box key={index} display={"flex"} justifyContent={"center"} alignItems={"center"} w="100%">
                                    <Button key={index} onClick={() => { chooseAnswer(i) }} colorScheme='blue' isDisabled={disableAnswer} w="100%">{i}</Button>
                                    //</Box>
                                )
                            })
                        }
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}
