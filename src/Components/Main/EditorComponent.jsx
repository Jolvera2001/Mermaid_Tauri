import { useCallback, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { mermaid } from 'codemirror-lang-mermaid'
import { monokai, monokaiInit } from '@uiw/codemirror-theme-monokai';
import MermaidComponent from './MermaidComponent'
import {
    Box,
    Textarea,
    HStack,
    VStack,
    Stack
} from "@chakra-ui/react";

function EditorComponent() {
    // doesn't update the component until you update the actual markdown????
    const [source, setSource] = useState(``)
    const id = "something"
    
    const onChange = useCallback((val, viewUpdate) => {
        setSource(val);
    }, []);

    return (
        <>
            <HStack bg='black' h='100vh'>
                <Box>
                    <VStack>
                        <CodeMirror 
                            value={source} 
                            height="100vh" 
                            width="50vw"
                            extensions={[mermaid()]}
                            theme={monokai}
                            onChange={onChange} 
                        />
                    </VStack>
                </Box>
                <Box w='50vw' h='100vh' bg='black'>
                    <MermaidComponent source={source} id={id} />
                </Box>
            </HStack>
        </>
    );
}

export default EditorComponent;
