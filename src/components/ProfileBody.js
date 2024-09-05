import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ProfileData } from '../components/Database';

const ProfileBody = () => {
  return (
    <View>        
      <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginBottom: 10,
          marginTop: -5,
      }}>
        <View style={{
            alignItems: 'center',
        }}>
            <Image
                source={require('../../assets/images/japanstreet.png')}
                style={{
                    resizeMode: 'cover',
                    width: 80,
                    height: 80,
                    borderRadius: 100,
                    borderColor: '#ffffff',
                    borderWidth: 2,
                }}
            />
            <Text style={{
                paddingVertical: 5,
                fontWeight: 'bold',
                color: '#ffffff',
                fontSize: 15,
            }}>
            KNU</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#ffffff', }}>5</Text>
            <Text style={{ color: '#ffffff', marginTop: 5, marginBottom: 20 }}>게시물</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#ffffff', }}>7</Text>
            <Text style={{ color: '#ffffff',  marginTop: 5, marginBottom: 20 }}>댓글</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#ffffff', }}>25</Text>
            <Text style={{ color: '#ffffff',  marginTop: 5, marginBottom: 20 }}>스크랩</Text>
        </View>
      </View>
    </View>
  )
}

export default ProfileBody

const styles = StyleSheet.create({})