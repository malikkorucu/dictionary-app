import React from 'react'
import { View, StatusBar, ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import Text from '../components/toolbox/text'
import Box from '../components/toolbox/box'
import theme from '../utils/theme'
import ActionButton from '../components/actionButton'
import { Bookmark, Hand, More, Voice, VoiceOpen } from '../components/icons'
import DetailSummary from '../components/detailSummary'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function detail() {

    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBarStyle('dark-content')
            StatusBar.setBackgroundColor('white')
        }, [])
    )


    return (
        <Box as={SafeAreaView}>
            <Box as={ScrollView} p={16}>
                <Box>
                    <Text fontSize={32} fontWeight="bold">Kalem</Text>
                    <Text color="textParagraphSecond">
                        <Text color="textParagraphSecond" fontStyle="italic">Arapça </Text>kalem
                </Text>
                </Box>
                {/* action buttons */}
                <Box flexDirection="row" my={20}>
                    <ActionButton width={45} ml={2}>
                        <VoiceOpen width="22" height="22" color={theme.colors.baseColor} />
                    </ActionButton>
                    <ActionButton ml={15} width={45}>
                        <Bookmark width="22" height="22" color={theme.colors.grey} />
                    </ActionButton>
                    <ActionButton
                        justifyContent="flex-start"
                        ml="auto" title="Türk İşaret Dili" px={10} mr={2}>
                        <Hand width="30" height="30" color={theme.colors.grey} />
                    </ActionButton>
                </Box>

                <Box mb={38}>
                    <DetailSummary borderTopLeftRadius={7} borderTopRightRadius={7} />
                    <DetailSummary borderTop />
                    <DetailSummary borderTop />
                    <DetailSummary borderTop borderBottomLeftRadius={7} borderBottomRightRadius={7} />
                </Box>
            </Box>
        </Box>
    )
}
