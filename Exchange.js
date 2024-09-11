import React, { useState, useEffect } from 'react';
import { TouchableOpacity, SafeAreaView, View, Text, TextInput, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Lyoko from '../../assets/svg/Lyoko.svg';

const Exchange = () => {
    const navigation = useNavigation();

    const [amount, setAmount] = useState('');
    const [amount2, setAmount2] = useState('');
    const [fromCurrency, setFromCurrency] = useState('JPY');
    const [toCurrency, setToCurrency] = useState('KRW');
    const [exchangeRate, setExchangeRate] = useState(null);
    const [convertedAmount, setConvertedAmount] = useState('');
    const [convertedAmount2, setConvertedAmount2] = useState('');

    useEffect(() => {
        if (fromCurrency && toCurrency) {
        getExchangeRate(fromCurrency, toCurrency);
        }
    }, [fromCurrency, toCurrency]);

    const getExchangeRate = async (from, to) => {
        try {
        const response = await axios.get(
            `https://api.exchangerate-api.com/v4/latest/${from}`
        );
        const rate = response.data.rates[to];
        setExchangeRate(rate);
        } catch (error) {
        console.error('Error fetching exchange rate:', error);
        }
    };

    const handleConvert = () => {
        if (!amount) {
        return;
        }
        const result = (parseFloat(amount) * exchangeRate).toFixed(2);
        setConvertedAmount(result);
    };

    const handleConvert2 = () => {
        if (!amount2) {
        return;
        }
        // JPY to KRW exchange rate is available, get the inverse rate for KRW to JPY
        const inverseRate = 1 / exchangeRate;
        const result = (parseFloat(amount2) * inverseRate).toFixed(2);
        setConvertedAmount2(result);
    };

  return (
        <SafeAreaView
                style={{
                    width: '100%',
                    backgroundColor: 'white',
                    flex: 1,
                }}>
                <View 
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent:'space-between',
                        padding: 10,
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{paddingLeft: 5, paddingBottom: 10}}>취소</Text>
                    </TouchableOpacity>
                    <Lyoko />
                    <TouchableOpacity>
                        <Text style={{ color: '#ffffff', paddingRight: 5, paddingBottom: 10}}>완료</Text>
                    </TouchableOpacity>
                </View>
            <View style={styles.container}>
                <Text style={styles.title}>환율 계산기 (JPY to KRW)</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.input}
                    placeholder="금액 입력"
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={setAmount}
                    />
                </View>
                <Button title="변환" onPress={handleConvert} />
                {convertedAmount !== '' && (
                    <Text style={styles.result}>
                    {amount} 엔 = {convertedAmount} 원
                    </Text>
                )}

                <View style={{padding: 10}}/>

                <Text style={styles.title}>환율 계산기 (KRW to JPY)</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.input}
                    placeholder="금액 입력"
                    keyboardType="numeric"
                    value={amount2}
                    onChangeText={setAmount2}
                    />
                </View>
                <Button title="변환" onPress={handleConvert2} />
                {convertedAmount2 !== '' && (
                    <Text style={styles.result}>
                    {amount2} 원 = {convertedAmount2} 엔
                    </Text>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 16,
        borderRadius: 4,
    },
    result: {
        marginTop: 16,
        fontSize: 18,
    },
});

export default Exchange;
