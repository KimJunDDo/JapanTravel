import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Recommend from './src/screens/Recommend';
import Community from './src/screens/Community';
import Ai from './src/screens/Ai';
import Exchange from './src/screens/Exchange';
import MyPage from './src/screens/MyPage';
import { NavigationContainer } from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Hokkaido from './src/screens/Hokkaido';
import Login from './src/screens/Login';
import EditProfile from './src/screens/EditProfile';
import Todo from './src/screens/Todo';
import Weather from './src/screens/Weather';
import Conversation from './src/screens/Conversation';
import Chat from './src/screens/Chat';
import DetailScreen from './src/components/DetailScreen';

import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import app from './firebase';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarActiveTintColor: '#ef4141',
          tabBarInactiveTintColor: '#767676',
          tabBarStyle: {
            height: 80,
          },
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            let IconComponent = Ionic;

            color = focused ? '#ef4141' : '#767676';
            if (route.name === '지역별 추천') {
              iconName = focused ? 'map-outline' : 'map-outline';
              size = focused ? size + 4 : size + 1;
            } else if (route.name === '커뮤니티') {
              iconName = focused ? 'albums-outline' : 'albums-outline';
              size = focused ? size + 4 : size + 1;
            } else if (route.name === 'AI 추천') {
              IconComponent = Material;
              iconName = focused ? 'robot-outline' : 'robot-outline';
              size = focused ? size + 4 : size + 1;
            } else if (route.name === '실시간 채팅') {
              iconName = focused ? 'chatbox-ellipses-outline' : 'chatbox-ellipses-outline';
              size = focused ? size + 4 : size + 1;
            } else if (route.name === '마이페이지') {
              iconName = focused? 'person-circle-outline' : 'person-circle-outline';
              size = focused ? size + 4 : size + 1;
            }
            return <IconComponent name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="지역별 추천" component={Recommend} />
        <Tab.Screen name="커뮤니티" component={Community} />
        <Tab.Screen name="AI 추천" component={Ai} />
        <Tab.Screen name="실시간 채팅" component={Chat} />
        <Tab.Screen name="마이페이지" component={MyPage} />
      </Tab.Navigator>
    );
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="Hokkaido" component={Hokkaido} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="Weather" component={Weather} />
        <Stack.Screen name="Exchange" component={Exchange} />
        <Stack.Screen name="Conversation" component={Conversation} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


export default App

const styles = StyleSheet.create({})
