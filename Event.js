import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const eventInfo = [
    {
        id: 1,
        name: '공항 라운지 이용권',
        image: require('../../assets/images/rounge.png'),
        url: 'https://leisure-web.yanolja.com/leisure/10073607'
    },
    {
        id: 2,
        name: '숙소 20% 할인',
        image: require('../../assets/images/20percent_01.png'),
    },
    {
        id: 3,
        name: '여행지별 할인',
        image: require('../../assets/images/best.png'),
    },
    {
        id: 4,
        name: '오사카 할인',
        image: require('../../assets/images/20percent_01.png'),
    },
]

const Event = () => {
  const handleImagePress = () => {
    Linking.openURL('https://www.naver.com');
  };

  return (
    <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        styles={{ paddingVertical: 20 }}>
        
        {eventInfo.map((data, index) => {
                return (
                    <TouchableOpacity onPress= {() => Linking.openURL(data.url)}>
                        <View
                            style={{
                                flexDirection: 'column',
                                paddingHorizontal: 3.5,
                                position: 'relative',
                                height: 20
                            }}>
                            <View
                                style={{
                                    position: 'absolute',
                                    bottom: 15,
                                    right: 10,
                                    zIndex: 1,
                                }}>
                            </View>
                            <View
                                style={{
                                    width: 123,
                                    height: 75,
                                    backgroundColor: '#e87a54',
                                    borderWidth: 1,
                                    borderRadius: 22,
                                    borderColor: '#ef4141',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Image
                                    source={data.image}
                                    style={{
                                        resizeMode: 'cover',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 20,
                                        backgroundColor: 'orange',
                                    }}
                                />
                            </View>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 12,
                                }}>
                                {data.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
    </ScrollView>
  )
}

export default Event

const styles = StyleSheet.create({})
