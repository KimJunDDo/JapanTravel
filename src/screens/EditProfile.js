import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

const EditProfile = ({ route, navigation}) => {
  //const { name, accountName, profileImage} = route.params;

  return (
    <SafeAreaView
        style={{
            width: '100%',
            backgroundColor: 'white',
    }}>
        <View 
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:'space-between',
                padding: 10,
        }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{paddingLeft: 5}}>취소</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: 'bold', }}>프로필 수정</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: '#ef4141', paddingRight: 5}}>완료</Text>
            </TouchableOpacity>
        </View>

        <View style={{ padding: 20, alignItems: 'center'}}>
            <Image
                source={require('../../assets/images/japanstreet.png')}
                style={{ width: 80, height: 80, borderRadius: 100,  }} />
            <Text style={{ color: '#ef4141', marginTop: 10 }}>프로필 사진 바꾸기</Text>
        </View>

        <View style={{ padding: 10 }}>
            <View>
                <Text style={{
                    opacity: 0.8,
                    paddingBottom: 2,
                }}>닉네임</Text>
            <TextInput
                placeholder='닉네임'
                //dafauleValue={name}
                style={{
                    fontSize: 16,
                    borderBottomWidth: 1,
                    borderColor: '#CDCDCD',
                }}/>
            </View>
        </View>
        <View style={{ padding: 10 }}>
            <View>
                <Text style={{
                    opacity: 0.8,
                    paddingBottom: 2,
                }}>비밀번호</Text>
            <TextInput
                placeholder='비밀번호'
                //dafauleValue={name}
                style={{
                    fontSize: 16,
                    borderBottomWidth: 1,
                    borderColor: '#CDCDCD',
                }}/>
            </View>
        </View>
        <View style={{ padding: 10 }}>
            <View>
                <Text style={{
                    opacity: 0.8,
                    paddingBottom: 2,
                }}>성별</Text>
            <TextInput
                placeholder='성별'
                //dafauleValue={name}
                style={{
                    fontSize: 16,
                    borderBottomWidth: 1,
                    borderColor: '#CDCDCD',
                }}/>
            </View>
        </View>
        <View style={{ padding: 10 }}>
            <View>
                <Text style={{
                    opacity: 0.8,
                    paddingBottom: 2,
                }}>생년월일</Text>
            <TextInput
                placeholder='생년월일'
                //dafauleValue={name}
                style={{
                    fontSize: 16,
                    borderBottomWidth: 1,
                    borderColor: '#CDCDCD',
                }}/>
            </View>
        </View>
        <View style={{ padding: 10 }}>
            <View>
                <Text style={{
                    opacity: 0.8,
                    paddingBottom: 2,
                }}>국적</Text>
            <TextInput
                placeholder='국적'
                //dafauleValue={name}
                style={{
                    fontSize: 16,
                    borderBottomWidth: 1,
                    borderColor: '#CDCDCD',
                }}/>
            </View>    
        </View>
    </SafeAreaView>
  )
}

export default EditProfile

const styles = StyleSheet.create({})