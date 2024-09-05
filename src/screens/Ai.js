import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from'react-native-safe-area-context'
import Lyoko from '../../assets/svg/Lyoko.svg';
import ChatInput from '../components/ChatInput';
import MessageList from '../components/MessageList';

const Ai = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          paddingHorizontal: 10,
          alignItems: 'center',
      }}>
        <View style={{
          justifyContent: 'center',
          flexDirection: 'row',          
          alignItems: 'center',           
      }}>
          <Lyoko />
        </View>
      </View>
      <MessageList />
      <ChatInput />
    </SafeAreaView>
  )
}

export default Ai

const styles = StyleSheet.create({})