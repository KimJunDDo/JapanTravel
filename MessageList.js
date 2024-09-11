import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useRef } from 'react'
import Message from './Message';

const MessageList = () => {
  const [messages, setMessages] = useState([
    {
        user: 0,
        content: '도쿄에서 1박 2일 여행할 예정인데, 시간대에 따라 여행지랑 먹거리 추천해줘'
    },
    {
        user: 1,
        content: "오전은 아사쿠사에 있는 센소지(浅草寺): 도쿄에서 가장 유명한 사원 중 하나입니다. '카미나리몬(雷門)'이라 불리는 대문을 통해 들어가보세요."
    },
    {
        user: 0,
        content: '밥은 뭐 먹는 게 좋을까?'
    },
    {
        user: 1,
        content: "아사쿠사에서의 점심을 드실 것이라면, 우나기(장어) 또는 덴푸라(튀김)을 추천드려요. 아사쿠사는 우나기와 덴푸라로 유명합니다. 지역의 전통 식당에서 일본식 점심을 즐겨보세요."
    },
    {
        user: 0,
        content: '오후 일정도 추천해줘'
    },
    
  ]);

  const user = useRef(0);
  const scrollView = useRef();

  return (
    <ScrollView style={{ backgroundColor: 'white'}}
        ref={ref => scrollView.current = ref}
        onContentChange={() => {
            scrollView.current.scrollToEnd({ animated: true });
        }}>
        {messages.map((message, index) =>(
            <Message
                key={index}
                isLeft={message.user !== user.current}
                message={message.content} />
        ))}
    </ScrollView>
  );
};

export default MessageList

const styles = StyleSheet.create({})
