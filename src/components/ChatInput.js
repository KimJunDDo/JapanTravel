import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ChatInput = () => {
    const [message, setMessage] = useState('');
    return (
        <View style={styles.container}>
        <View style={styles.innerContainer}>
            <View style={styles.inputAndMicrophone}>
                <TouchableOpacity style={styles.emoticonButton}>
                    <Feather name='camera' size={25} color='#767676' />
                </TouchableOpacity>
                <TextInput
                    value={message} 
                    multiline
                    placeholder='AI에게 추천을 받아보세요'
                    placeholderTextColor='#767676'
                    style={styles.input}
                    onChangeText={text => setMessage(text)}
                />
            </View>
            <TouchableOpacity style={styles.sendButton}>
                <FontAwesome name='send' size={18} color='white' />
            </TouchableOpacity>
        </View>
        </View>
    )
    }

    export default ChatInput

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
        backgroundColor: 'white',
        height: 1,
      },
    innerContainer: {
        paddingHOrizontal: 10,
        marginHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
    },
    inputAndMicrophone:{
        flexDirection: 'row',        
        marginRight: 10,
        paddingVertical: 10,
        flex: 3,
        borderRadius: 30,
    },
    input: {
        paddingLeft: 10,
        maxHeight: 100,
        alignSelf: 'center',
        backgroundColor: '#eeeeee',
        flex: 3,
        borderRadius: 10,
        height: 30,
        fontSize: 16,
        
    },
    emoticonButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10
    },
    sendButton: {
        backgroundColor: '#ef4141',
        borderRadius: 50,
        height: 35,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center'
    }
})