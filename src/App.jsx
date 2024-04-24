import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import MermaidComponent from './MermaidComponent'

function App() {
    // doesn't update the component until you update the actual markdown????
    const [source, setSource] = useState(``)
    const id = "something"
    
    const handleSourceChange = (event) => {
        setSource(event.target.value);
    };
    
    return (
        <>
            <textarea value={source} onChange={handleSourceChange} rows={10} cols={20} />
            <MermaidComponent source={source} id={id} />
        </>
    );
}

export default App;
