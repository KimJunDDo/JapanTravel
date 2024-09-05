import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionic from 'react-native-vector-icons/Ionicons';
import Fonti from 'react-native-vector-icons/Fontisto';
import Map from '../components/Map';
import Event from '../components/Event';
import Lyoko from '../../assets/svg/Lyoko.svg';

const Recommend = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex:1  }}>
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
          <Lyoko />
        {/*<View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Ionic name="search" style={{ fontSize: 24, paddingHorizontal: 15, color: '#ef4141' }} />
            <Fonti name="bell" style={{ fontSize: 24, color: '#ef4141' }} />
        </View> */}
      </View>
      <Event />
      <ScrollView>
        {/*Event*/}
        <Map style={{ paddingTop: '10'}} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Recommend

const styles = StyleSheet.create({})