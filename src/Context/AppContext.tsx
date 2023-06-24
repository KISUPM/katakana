import { useState, createContext } from 'react'

export const AppContext = createContext({
    content: {},
    setContent: (newContent: any) => { },
    mode: "",
    setMode: (mode: string) => { }
})

const AppContextProvider = (props: any) => {
    const [content, setContent] = useState<{}>({});
    const [mode, setMode] = useState("");

    const addContent = (newContent: any) => {
        setContent({ ...content, ...newContent })
    }

    const setNewMode = (newMode: string) => {
        setMode(newMode)
    }

    const context = {
        content: content,
        mode: mode,
        setContent: addContent,
        setMode: setNewMode
    }
    return (
        <AppContext.Provider value={context}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider