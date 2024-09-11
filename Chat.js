import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { database, auth } from '../../firebase';  // Firebase 설정을 가져옴
import { ref, push, onValue } from 'firebase/database';
import { SafeAreaView } from 'react-native-safe-area-context';

const Chat = () => {
  const [message, setMessage] = useState('');            // 입력한 메시지
  const [messages, setMessages] = useState([]);          // 채팅 메시지 목록

  useEffect(() => {
    console.log("Firebase에서 메시지 가져오기 시작");
  
    const messagesRef = ref(database, 'messages');
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        console.log("가져온 메시지 데이터:", data);
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
  
  const handleSend = () => {
    if (message.trim() === '') return;
  
    const user = auth.currentUser;
    if (!user) {
      console.log('사용자가 로그인되어 있지 않습니다.');
      return;
    }
  
    const messagesRef = ref(database, 'messages');
    push(messagesRef, {
      text: message,
      user: user.email,
      timestamp: Date.now()
    })
    .then((snapshot) => {
      console.log('메시지 전송 성공:', snapshot.key);  // 메시지가 저장된 key 값을 출력
      setMessage('');
    })
    .catch((error) => {
      console.error('메시지 전송 에러:', error);
    });
  };
  
  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.messageUser}>{item.user}</Text>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="메시지를 입력하세요..."
        />
        <Button title="전송" onPress={handleSend} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  messageContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  messageUser: {
    fontWeight: 'bold',
  },
  messageText: {
    marginTop: 5,
  },
});

export default Chat;
