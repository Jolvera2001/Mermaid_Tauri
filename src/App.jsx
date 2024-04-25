import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import MermaidComponent from './MermaidComponent'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

import {
    Box,
    Textarea,
    HStack,
    VStack,
    Stack
} from "@chakra-ui/react";

function App() {
    // doesn't update the component until you update the actual markdown????
    const [source, setSource] = useState(``)
    const id = "something"
    
    return (
        <>
        <HStack p={5} spacing={10}>
            <Box p={5}>
                <VStack spacing={5}>
                    <Textarea value={source} onChange={event => setSource(event.target.value)} w='40vh'/>
                    <SyntaxHighlighter language="mermaid" style={prism}>
                        {source}
                    </SyntaxHighlighter>
                </VStack>
            </Box>
            <Box w='50vh'>
                <MermaidComponent source={source} id={id} />
            </Box>
        </HStack>
        </>
    );
}

export default App;
