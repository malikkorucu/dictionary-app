import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import * as React from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, SafeAreaView ,Keyboard} from 'react-native';
import Search from './src/views/search'
import Home from './src/views/home'
import Detail from './src/views/detail'
import History from './src/views/history'
import Button from './src/components/toolbox/button'
import TabBar from './src/components/common/tab-bar'
import Box from './src/components/toolbox/box'
import { ThemeProvider } from 'styled-components'
import theme from './src/utils/theme'
import SafeAreaProvider from 'react-native-safe-area-context'
import { Leftİcon, More } from './src/components/icons';

const Tab = createBottomTabNavigator()
const HomeStack = createStackNavigator();

function SearchStack() {
  return (
    // headerMode="none" header'ı gizliyor 
    <HomeStack.Navigator initialRouteName="Search">
      <HomeStack.Screen
        options={{ title: "", headerShown: false, headerStyle: { backgroundColor: theme.colors.red } }}
        name="Search" component={Search} />
      <HomeStack.Screen
        name="Detail" component={Detail}
        options={({ route, navigation }) => {
          return {
            title: route.params.title && route.params.title || 'boş',
            headerStyle: {
              shadowColor: 'transparent',
              elevation: 0,
            },
            headerLeft: () => (
              <Button  ml={4} height="100%" 
              onPress={() => navigation.navigate('Search')}><Leftİcon /></Button>
            ),
            headerRight: () => (
              <Button height="100%" mr={10}><More /></Button>
            )
          }
        }}
      />
    </HomeStack.Navigator>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme} >
      <NavigationContainer >
        <Tab.Navigator
          tabBar={props => <TabBar {...props} />}
          initialRouteName="search">
          <Tab.Screen name="history" component={History} />
          <Tab.Screen name="search" component={SearchStack} />
          <Tab.Screen name="favorite" component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({});
export default App;
