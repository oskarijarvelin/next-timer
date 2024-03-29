import App from 'next/app';
import AppContext from '../context'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import "@fontsource/open-sans"
import '../styles.css'

const breakpoints = createBreakpoints({
    sm: "320px",
    sm2: "460px",
    md: "768px",
    lg: "960px",
    xl: "1280px",
    xxl: "1332px",
})

const theme = extendTheme({
    colors: {
        bg: '#000',
        light: '#FFF',
        body: '#000',
        mute: '#666',
        current: '#C3D9D7',
    },
    fonts: {
        heading: "Open Sans",
        body: "Open Sans",
    },
    breakpoints,
})

export default class MyApp extends App {
    
    state = {
        time: new Date(),
        stop: true
    }

    setTime = ( date ) => {
        this.setState({
            time: date
        })
    }

    setStop = ( value ) => {
        this.setState({
            stop: value
        })
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <ChakraProvider theme={theme}>
                <AppContext.Provider value={{time: this.state.time, setTime: this.setTime, stop: this.state.stop, setStop: this.setStop}}>
                    <Component {...pageProps} />
                </AppContext.Provider>
            </ChakraProvider>
        )
    }
}