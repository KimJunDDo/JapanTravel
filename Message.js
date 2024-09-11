import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Message = ({ isLeft, message }) => {

    const isOnLeft = type => {
        if (isLeft && type === 'messageContainer') {
            return {
                alignSelf: 'flex-start',
                backgroundColor: '#eeeeee',
                borderTopLeftRadius: 0
            };
        } else if (isLeft && type === 'message') {
            return {
                color: '#000',
            };
        } else {
            return {
                borderTopRightRadius: 0,
            };
        }
    }

    return (
        <View style={styles.container}>
            <View style={[styles.messageContainer, isOnLeft('messageContainer')]}>
                <View style={styles.messageView}>
                    <Text style={[styles.message, isOnLeft('message')]}>{message}</Text>
                </View>
            </View>
        </View>
    );
};

export default Message;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginVertical: 5,
    },
    messageContainer: {
        backgroundColor: '#ef4141',
        maxWidth: '80%',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        borderRadius: 15,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    messageView: {
        backgroundColor: 'transparent',
        maxWidth: '80%',
    },
    message: {
        color: 'white',
        fontSize: 15,
        alignSelf: 'flex-start',
    }
});
