import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const ExchangeConverter = () => {
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
    const inverseRate = 1 / exchangeRate;
    const result = (parseFloat(amount2) * inverseRate).toFixed(2);
    setConvertedAmount2(result);
  };

  return (
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
      <TouchableOpacity style={styles.convertButton} onPress={handleConvert}>
        <Text style={styles.convertButtonText}>변환</Text>
      </TouchableOpacity>
      {convertedAmount !== '' && (
        <Text style={styles.result}>
          {amount} 엔 = {convertedAmount} 원
        </Text>
      )}

      <View style={styles.separator} />

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
      <TouchableOpacity style={styles.convertButton} onPress={handleConvert2}>
        <Text style={styles.convertButtonText}>변환</Text>
      </TouchableOpacity>
      {convertedAmount2 !== '' && (
        <Text style={styles.result}>
          {amount2} 원 = {convertedAmount2} 엔
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  convertButton: {
    width: '100%',
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  convertButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  result: {
    marginTop: 16,
    fontSize: 18,
    color: '#333',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
});

export default ExchangeConverter;
