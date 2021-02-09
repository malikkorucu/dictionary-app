import React from 'react'
import { View } from 'react-native'
import theme from '../utils/theme'
import Box from './toolbox/box'
import Text from './toolbox/text'

export default function detailSummary({ borderTop, ...props }) {
    // borderBottomWidth={true ? 1 : 0}
    return (
        <Box px={16} py={12} bg="white"  {...props}>
            {borderTop && <Box height={1} bg="grey" mb={15}></Box>}
            <Text ml={-10} mt={-2}>1</Text>
            <Text fontStyle="italic" color={theme.colors.red}>İSİM</Text>
            <Text fontWeight="bold">
                Yazma çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
            </Text>
            <Text ml={10}>
                "Kağıt, kalem , mürekkep, hepsi masanın üstündedir." - Falih Rıfkı Atay
            </Text>
        </Box>
    )
}
