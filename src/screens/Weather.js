import { StyleSheet, Text, View, Container } from 'react-native'
import React from 'react'
import { GiftedChat, Send, Bubble, InputToolbar } from 'react-native-gifted-chat'

const Weather = () => {

    const _handleMessageSend = async (messageList) => {
        const message = messageList[0]; //배열로 들어오기 때문에
        try {
            await createMessage({ channelId: route.params.id, message });
        } catch (e) {
            Alert.alert('Message Error', e.message);
        }
    };

    return (
        <Container>
            <GiftedChat
                placeholder='Enter a message ...'
                messages={messages}
                showUserAvatar={true}
                user={{ _id: uid, name, avatar: photo }}
                onSend={_handleMessageSend}
                scrollToBottom={true} //**가장 아래로 이동하는 버튼 */
                renderUsername={() => true} //**유저 이름 표시 */
                alwaysShowSend={true} //**send 버튼이 항상 보이도록 */
                multiline={false} //**textaline에서 여러줄 허용 설정 */
            />
        </Container>
    )
}

export default Weather

const styles = StyleSheet.create({})