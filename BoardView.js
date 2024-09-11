import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const sampleData = [
  {
    id: '1',
    title: '오사카 성 왔어요~',
    image: require('../../assets/images/osaka.jpeg'),
    name: '강냉이 1',
    date: '2024-08-01',
    recommendations: 3,
    content: '진짜 오사카성 겁나게 재밌음',
  },
  {
    id: '2',
    title: '라멘 맛집 추천 좀',
    image: require('../../assets/images/ramen.jpeg'),
    name: '강냉이 2',
    date: '2023-11-14',
    recommendations: 0,
  },
  {
    id: '3',
    title: '훗카이도 노면전차^^',
    image: require('../../assets/images/train.png'),
    name: '강냉이 8',
    date: '2024-04-07',
    recommendations: 15,
  },
  {
    id: '4',
    title: '사람 엄청 많아요.....',
    image: require('../../assets/images/japanstreet.png'),
    name: '강냉이 13',
    date: '2024-09-01',
    recommendations: 3,
    content: '오사카 길거리인데 사람이 엄청 많아요\n특히 한국인들 천지입니다..\n그래도 여행오니까 재밌어요!',
  },
  {
    id: '5',
    title: '도쿄 스시',
    image: require('../../assets/images/sushi.jpeg'),
    name: '강냉이 6',
    date: '2023-12-12',
    recommendations: 7,
  },
  {
    id: '6',
    title: '오사카 교자 맛집!',
    image: require('../../assets/images/gyoza.jpeg'),
    name: '오사카 투어 강냉',
    date: '2022-05-25',
    recommendations: 7,
  },
  {
    id: '7',
    title: 'Beautiful Sunset',
    image: require('../../assets/images/rounge.png'),
    name: 'John Doe',
    date: '2024-08-01',
    recommendations: 10,
  },
  {
    id: '8',
    title: 'Beautiful Sunset',
    image: require('../../assets/images/rounge.png'),
    name: 'John Doe',
    date: '2024-08-01',
    recommendations: 10,
  },

  // Add more items as needed
];

const BoardItem = ({ item }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.push('DetailScreen', { item });
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.boardItem}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.recommendations}>👍 +{item.recommendations}</Text>
        </TouchableOpacity>
    );
};

const BoardView = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={sampleData}
        keyExtractor={(item) => item.id}
        numColumns={2} // Limit to 2 columns
        renderItem={({ item }) => <BoardItem item={item} />}
      />
    </ScrollView>
  );
};

export default BoardView;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  boardItem: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ef4141',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    marginBottom: 3,
  },
  name: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
  recommendations: {
    fontSize: 12,
    color: '#f56',
    marginTop: 5,
  },
});
