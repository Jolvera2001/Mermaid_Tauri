import React, { useState, useEffect, useCallback } from 'react';
import {
    HStack,
    VStack,
    Box,
    Text,
    Button,
    Icon,
} from '@chakra-ui/react';

function FileDataComponent(filesData) {
    const files = filesData.filesData;
    return(
        <>
            <Box m={4}>
                <VStack>
                    {files.map((file, index) => (
                        <HStack key={index}>
                            <Icon />
                            <Text>{file.name}</Text>
                        </HStack>
                    ))}
                </VStack>
            </Box>
        </>
    )
}

export default FileDataComponent;