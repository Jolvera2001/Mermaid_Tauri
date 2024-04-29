import React, { useState, useEffect, useCallback } from 'react';
import { FaFolderOpen, FaFile } from 'react-icons/fa';
import {
    HStack,
    VStack,
    Box,
    Text,
    Button,
    Icon,
    Flex,
    Divider
} from '@chakra-ui/react';

function FileDataComponent(folder) {
    const unwrappedFolder = folder.folder;
    const files = unwrappedFolder.children;
    return(
        <>
            <Flex h="100vh" gridGap={2} mx={4} py={6}>
                <VStack w={120}>
                    <HStack>
                        <Text fontSize='xl'>{unwrappedFolder.name}</Text>
                        <Icon as={FaFolderOpen} />
                    </HStack>
                    <Divider />
                    {files.map((file, index) => (
                        <HStack key={index} alignItems='start'>
                            <Text>{file.name}</Text>
                            <Icon as={FaFile}/>
                        </HStack>
                    ))}
                </VStack>
            </Flex>
        </>
    )
}

export default FileDataComponent;