import React, { useState, useEffect, useCallback } from 'react';
import EditorComponent from '../Components/Main/EditorComponent';
import FileDataComponent from '../Components/Main/FileDataComponent';
import {
    Box,
    HStack
} from '@chakra-ui/react';

function MainController() {
    const [folder, setFolder] = useState(
        {
            name: 'root',
            path: '/',
            type: 'folder',
            children: [
                {
                    name: 'file1',
                    path: '/file1',
                },
                {
                    name: 'file2',
                    path: '/file2',
                },
                {
                    name: 'file3',
                    path: '/file3',
                
                }
            ]
        }
    );

    return(
        <>
            <Box>
                <HStack>
                    <FileDataComponent folder={folder} />
                    <EditorComponent />
                </HStack>
            </Box>
        </>
    )
}

export default MainController;