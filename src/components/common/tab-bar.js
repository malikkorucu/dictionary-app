import { Text, TouchableOpacity, StyleSheet , StatusBar } from 'react-native';
import React from 'react'
import Button from '../toolbox/button'
import { Bookmark, Rotate, Search } from '../../components/icons';
import Box from '../toolbox/box'
import theme from '../../utils/theme'


export default function TabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    const shadowOpt = {
        width: 160,
        height: 170,
        color: "#000",
        border: 2,
        radius: 3,
        opacity: 0.2,
        x: 0,
        y: 3,
        style: { marginVertical: 5 }
      };

    return (

        <Box style={styles.shadowCustom} flexDirection="row" bg="white">
            
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                // const onLongPress = () => {
                //     navigation.emit({
                //         type: 'tabLongPress',
                //         target: route.key,
                //     });
                // };

                return label === 'search' ?
                    (
                        <Box p={15} borderRadius={100} bg="white" mt={-19} key={label}>
                            <Button borderRadius={100} bg={theme.colors.red} p={2} size={56} onPress={onPress}>
                                <Search stroke="white" />
                            </Button>
                        </Box>
                    ) : (
                        <Button
                            flexDirection="column"
                            height={56}
                            flex={1}
                            key={label}
                            onPress={onPress}>
                            {label === 'history' && <Rotate width={22} height={22} stroke={theme.colors.grey} />}
                            {label === 'favorite' && <Bookmark stroke={theme.colors.grey} />}
                            {isFocused ? <Box mt={3} size={3} borderRadius={100} bg="red" /> : <Box size={3} mt={3}></Box>}
                        </Button>
                    )
            })}
        </Box>
    );
}

const styles = StyleSheet.create({
    shadowCustom: {
        elevation:12
    }
})