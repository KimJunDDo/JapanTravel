import React from 'react';
import { View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import 'react-native-svg'
import Japan4 from '../../assets/svg/Japan4.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Group2 from '../../assets/svg/Group2.svg';
import Jp2 from '../../assets/svg/Jp2.svg';
import Jp3 from '../../assets/svg/Jp3.svg';
import { Svg, Rect, Text } from 'react-native-svg';

const HokkaidoMap = () => {
  const navigation = useNavigation();

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
      </Svg>

      <TouchableOpacity style={{ position: 'absolute', left: 252, top: 0 }} onPress={() => console.log('Rect 1 pressed')}>
        <View style={{ width: 110, height: 110 }} />
      </TouchableOpacity>
    </View>
  );
};

export default HokkaidoMap;

