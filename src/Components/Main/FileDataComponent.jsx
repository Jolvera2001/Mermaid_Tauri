import React, { useState, useEffect, useCallback } from 'react';
import {
    HStack,
    VStack,
    Box,
    Text,
    Button,
    Icon,
    Flex
} from '@chakra-ui/react';

function FileDataComponent(filesData) {
    const files = filesData.filesData;
    return(
        <>
            <Flex height="100vh" gridGap={2} mx={6} py={6}>
                <VStack>
                    {files.map((file, index) => (
                        <HStack key={index} alignItems='start'>
                            <Icon />
                            <Text>{file.name}</Text>
                        </HStack>
                    ))}
                </VStack>
            </Flex>
        </>
    )
}

export default FileDataComponent;