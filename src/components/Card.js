import React from 'react'
import { View } from 'react-native'
import theme from '../utils/theme'
import Box from './toolbox/box'
import Text from './toolbox/text'

export default function Card({ item, ...props }) {
    return (
        <Box
            flexDirection="row"
            alignItems="center"
            px={16} py={12}
            borderRadius={5}
            bg="#F8F8F8" {...props}>
            <Box width={3} height="100%" bg="#000">
                <Text></Text>
            </Box>
            <Box ml={12}>
                <Text fontWeight="bold" fontSize={16}>{item?.madde}</Text>
                <Text mt={5}>{item?.anlam}</Text>
            </Box>
        </Box>
    )
}

