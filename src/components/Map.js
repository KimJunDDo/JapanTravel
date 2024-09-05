import React, { useState } from 'react';
import { View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import 'react-native-svg'
import Japan4 from '../../assets/svg/Japan4.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Group2 from '../../assets/svg/Group2.svg';
import Jp2 from '../../assets/svg/Jp2.svg';
import Jp3 from '../../assets/svg/Jp3.svg';
import { Svg, Rect, Text } from 'react-native-svg';
import HokkaidoMap from './HokkaidoMap';

const Map = () => {
  const navigation = useNavigation();
  const [showHokkaidoMap, setShowHokkaidoMap] = useState(false);

  const handleFirstRectPress = () => {
    console.log('firstRectPress');
    setShowHokkaidoMap(true);
  }

  if (showHokkaidoMap) {
    return <HokkaidoMap />
  }

  return (
    <View style={{ position: 'relative', width: 337, height: 286, paddingLeft: 25 }}>
        <Svg width="337" height="286" viewBox="0 0 337 286" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect x="225" y="5" width="110" height="110" fill="#ffffff" rx="10" ry="10" stroke="#EF4141" strokeWidth="3"/>
            <Text
                x={225 + 110 / 2} // Center of the rectangle (227 + 110/2)
                y={5 + 110 / 2}  // Center of the rectangle (110/2)
                fill="#EF4141"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
                alignmentBaseline="central"  // Corrected to "central" to align properly
            >
            훗카이도
            </Text>

            <Rect x="225" y="121" width="110" height="75" fill="#ffffff" rx="10" ry="10" stroke="#EF4141" strokeWidth="3"/>
            <Text
                x={225 + 110 / 2}
                y={121 + 75 / 2}
                fill="#EF4141"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
                alignmentBaseline="middle"
                >
            도호쿠
            </Text>

            <Rect x="225" y="203" width="110" height="80" fill="#ffffff" rx="10" ry="10" stroke="#EF4141" strokeWidth="3"/>
            <Text
                x={225 + 110 / 2}
                y={203 + 80 / 2}
                fill="#EF4141"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
                alignmentBaseline="middle"
                >
            간토
            </Text>

            <Rect x="91" y="168" width="68" height="72" fill="#ffffff" rx="10" ry="10" stroke="#EF4141" strokeWidth="3"/>
            <Text
                x={91 + 68 / 2}
                y={168 + 72 / 2}
                fill="#EF4141"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
                alignmentBaseline="middle"
                >
            주고쿠
            </Text>

            <Rect x="165" y="168" width="54" height="116" fill="#ffffff" rx="10" ry="10" stroke="#EF4141" strokeWidth="3"/>
            <Text
                x={165 + 54 / 2}
                y={168 + 116 / 2}
                fill="#EF4141"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
                alignmentBaseline="middle"
                >
            긴키
            </Text>

            <Rect x="91" y="247" width="68" height="37" fill="#ffffff" rx="10" ry="10" stroke="#EF4141" strokeWidth="3"/>
            <Text
                x={91 + 68 / 2}
                y={247 + 37 / 2}
                fill="#EF4141"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
                alignmentBaseline="middle"
                >
            시고쿠
            </Text>

            <Rect x="5" y="168" width="80" height="116" fill="#ffffff" rx="10" ry="10" stroke="#EF4141" strokeWidth="3"/>
            <Text
                x={5 + 80 / 2}
                y={168 + 116 / 2}
                fill="#EF4141"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
                alignmentBaseline="middle"
                >
            규슈
            </Text>
        </Svg>

      <TouchableOpacity style={{ position: 'absolute', left: 252, top: 0 }} onPress={handleFirstRectPress}>
        <View style={{ width: 110, height: 110 }} />
      </TouchableOpacity>

      <TouchableOpacity style={{ position: 'absolute', left: 227, top: 121 }} onPress={() => console.log('Rect 2 pressed')}>
        <View style={{ width: 110, height: 165 }} />
      </TouchableOpacity>
      <TouchableOpacity style={{ position: 'absolute', left: 91, top: 170 }} onPress={() => console.log('Rect 3 pressed')}>
        <View style={{ width: 246, height: 68 }} />
      </TouchableOpacity>
      
      {/* 나머지 Rect에 대해서도 같은 방식으로 TouchableOpacity 추가 */}
    </View>
  );
};

export default Map;

