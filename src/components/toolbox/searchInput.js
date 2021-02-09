import React, { useState } from 'react'
import { View, Keyboard, StyleSheet } from 'react-native'
import { Search, X } from '../icons'
import Box from './box'
import Text from './text'
import theme from '../../utils/theme'
import { Logo } from '../icons'
import Button from './button'
import Input from './input'
import { style } from 'styled-system'

function SearchInput({ onChangeFocus }) {
    const [isFocus, setFocus] = React.useState(false)
    const [value, setValue] = React.useState("")
    const [isSearchFocus, setSearchFocus] = useState(false)

    const onClose = () => {
        Keyboard.dismiss();
        setFocus(false);
        onChangeFocus(false)
    }

    const onClear = () => {
        setValue("")
    }

    return (
        <Box flexDirection="row" alignItems="center">
            <Box style={styles.shadowCustom} className="search-input"
                px={15}
                flex={1}
                flexDirection="row"
                alignItems="center"
                bg="white"
                borderRadius={8}>
                <Button pr={10}>
                    <Search color="black" />
                </Button>
                <Box flexDirection="row" alignItems="center" position="relative" width="95%">
                    <Input
                        onFocus={() => {setFocus(true) ; onChangeFocus(true)}}
                        onChangeText={e => setValue(e)}
                        width="90%"
                        value={value}
                        placeholder="Türkçe Sözlük'te Ara"
                        color="textParagraph"
                    />
                    {value.length > 0 &&
                        <Button onPress={() => onClear()} position="absolute">
                            <X right={10} stroke="black" width={20} height={20}></X>
                        </Button>
                    }
                </Box>
            </Box>
            {
                isFocus ?
                    <Button onPress={() => onClose()}>
                        <Text pl={5} height={52}>Vazgeç</Text>
                    </Button>
                    : <Text></Text>
            }
        </Box>
    )
}

const styles = StyleSheet.create({
    shadowCustom: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }
})

export default SearchInput