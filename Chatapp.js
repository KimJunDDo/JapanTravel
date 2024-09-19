import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { database, auth } from '../../firebase';  // Firebase 설정을 가져옴
import { ref, push, onValue, get } from 'firebase/database';
import { SafeAreaView } from 'react-native-safe-area-context';

// Message 컴포넌트
const Message = ({ isLeft, message, user, timestamp }) => (
  <View
    style={[
      styles.messageContainer,
      isLeft ? styles.leftMessage : styles.rightMessage,
    ]}
  >
    <Text style={styles.messageUser}>{user}</Text>
    <Text style={styles.messageText}>{message}</Text>
    <Text style={styles.messageTimestamp}>{new Date(timestamp).toLocaleTimeString()}</Text>
  </View>
);

const ChatApp = () => {
  const [message, setMessage] = useState('');            // 입력한 메시지
  const [messages, setMessages] = useState([]);          // 채팅 메시지 목록
  const [nickname, setNickname] = useState('Anonymous'); // 닉네임 상태
  const user = useRef(auth.currentUser);                 // 현재 로그인한 사용자
  const scrollView = useRef();

  // Firebase에서 메시지 가져오기
  useEffect(() => {
    const messagesRef = ref(database, 'messages');
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedMessages = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setMessages(loadedMessages);
      } else {
        console.log("메시지가 없습니다.");
      }
    });
  }, []);

  // 메시지를 전송하는 함수
  const sendMessage = () => {
    if (message.trim() === '') return;

    const user = auth.currentUser;
    if (!user) {
      console.log('사용자가 로그인되어 있지 않습니다.');
      return;
    }

    const messagesRef = ref(database, 'messages');
    push(messagesRef, {
      text: message,
      user: user.email || "Anonymous",  // Realtime Database에서 가져온 닉네임 사용
      timestamp: Date.now(),  // 타임스탬프 추가
    })
    .then(() => {
      setMessage('');
    })
    .catch((error) => {
      console.error('메시지 전송 에러:', error);
    });
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0} // iOS에서 키보드 높이 보정
    >
      {/* 메시지 리스트 */}
      <ScrollView
        style={styles.messageList}
        ref={(ref) => (scrollView.current = ref)}
        onContentSizeChange={() => {
          scrollView.current.scrollToEnd({ animated: true });
        }}
      >
        {messages.map((msg, index) => (
          <Message
            key={index}
            isLeft={msg.user !== nickname}  // 사용자 이름 비교
            message={msg.text}
            user={msg.user}
            timestamp={msg.timestamp}  // 타임스탬프 전달
          />
        ))}
      </ScrollView>

      {/* 채팅 입력창 */}
      <View style={styles.inputContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.inputAndMicrophone}>
            <TouchableOpacity style={styles.emoticonButton}>
              <Feather name="camera" size={25} color="#767676" />
            </TouchableOpacity>
            <TextInput
              value={message}
              multiline
              placeholder="메시지를 입력하세요..."
              placeholderTextColor="#767676"
              style={styles.input}
              onChangeText={(text) => setMessage(text)}
            />
          </View>
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <FontAwesome name="send" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  messageList: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  messageContainer: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  leftMessage: {
    backgroundColor: '#e1e1e1',
    alignSelf: 'flex-start',
  },
  rightMessage: {
    backgroundColor: '#ef4141',
    alignSelf: 'flex-end',
  },
  messageText: {
    color: '#000000',
  },
  messageUser: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  messageTimestamp: {
    marginTop: 5,
    fontSize: 10,
    color: '#666',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 0,
    marginBottom: -30,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  inputAndMicrophone: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#eeeeee',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    maxHeight: 100,
    fontSize: 16,
  },
  emoticonButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButton: {
    backgroundColor: '#ef4141',
    borderRadius: 50,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
});
