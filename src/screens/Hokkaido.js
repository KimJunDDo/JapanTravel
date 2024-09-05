import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionic from 'react-native-vector-icons/Ionicons';
import Fonti from 'react-native-vector-icons/Fontisto';
import Map from '../components/Map';
import Event from '../components/Event';

const Hokkaido = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
          paddingBottom: 10,
      }}>
        <View>
          <Text
            style={{ fontSize: 25, fontWeight: '500', color: '#767676' }}>
              Japan Travel
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Ionic name="search" style={{ fontSize: 24, paddingHorizontal: 15, color: '#767676' }} />
            <Fonti name="bell" style={{ fontSize: 24, color: '#767676' }} />
        </View>
      </View>
      <ScrollView>
        {/*Event*/}
        <Map style={{}} />
      </ScrollView>
    </SafeAreaView>
  )
};

export default Hokkaido;

const styles = StyleSheet.create({});