import { useContext } from 'react'
import AppContext from '../context'
import { Box, Stack, Button, Text, Heading } from '@chakra-ui/react'
import Moment from 'react-moment'

export default function Index() {
    const { time, setTime, stop, setStop } = useContext(AppContext);

    const start = (event) => {
        setTime( new Date() );
        setStop( !stop );
    }

    const reset = (event) => {
        setTime( new Date() );
    }

    return (
        <Box p={10} textAlign="center">

            <Heading fontSize="8vw" color="#666">
                <Moment interval={1000} format="HH:mm:ss" />
            </Heading>

            <Heading fontSize="20vw" color="#FFF">
                {stop &&
                    <Text>00:00:00</Text>
                }
                {!stop &&
                    <Moment date={time} interval={1000} format="HH:mm:ss" durationFromNow subtract={{ seconds: 1 }} />
                }
                
            </Heading>

            <Stack justifyContent='center' mt={10} direction='row' spacing={4}>
                <Button colorScheme='blue' size='lg' onClick={start}>{stop ? "Start" : "Stop"}</Button>
                {!stop &&
                    <Button colorScheme='blue' size='lg' onClick={reset}>Reset</Button>
                }
            </Stack>

        </Box>
    )
}