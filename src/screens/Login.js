import { Alert, StatusBar, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import LyokoW from '../../assets/svg/LyokoW.svg';
import LyokoB from '../../assets/svg/LyokoB.svg';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [sex, setSex] = useState('');
    const [birth, setBirth] = useState('');
    const [country, setCountry] = useState('');

    const [isModalVisible, setIsModalVisible] = useState('');


    const navigaiton = useNavigation();
    const auth = getAuth();
    const handleSignUp = async() => {
        try {
            if(password === confirmpassword) {
                const user = await createUserWithEmailAndPassword(auth, email, password);
                console.log('user', user);
                setIsModalVisible(false);
            }
            else {
                Alert.alert("비밀번호 오류", "비밀번호 확인이 일치하지 않습니다.", [{ text: "닫기", onPress: () => console.log('닫기') }], { cancelable: true });
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    const handleLoginUp = async() => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log('user', user);
        } catch (error) {
            Alert.alert("로그인 도중에 문제가 발생했습니다.", "이메일, 비밀번호를 확인해주세요.", [{ text: "닫기", onPress: () => console.log('닫기') }], { cancelable: true });
            console.log(error.message);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            console.log('user', user);
            if(user) {
                            navigaiton.navigate('Bottom');
            }
        })
        return unsubscribe;
    }, []);

    const onPressModalOpen = () => {
        console.log("회원가입창 여는 중입니다.")
        setIsModalVisible(true);
    };

    const onPressModalClose = () => {
        console.log("회원가입창 닫는 중입니다.")
        setIsModalVisible(false);
    };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EF4141',}}>
        <StatusBar barStyle="light-content" />
        <LyokoW style={{marginTop: 300}} />
        <View style={{width: '80%', marginTop: 20}}>
            <TextInput
            placeholder="이메일"
            value={email}
            onChangeText={text => setEmail(text)}
            autoCapitalize={'none'}
            style={{
                backgroundColor: 'white',
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 10,
                marginTop: 5,
            }}
            />
            <TextInput
            placeholder="비밀번호"
            value={password}
            onChangeText={text => setPassword(text)}
            autoCapitalize={'none'}
            secureTextEntry
            onSubmitEditing={handleLoginUp}
            style={{
                backgroundColor: 'white',
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 10,
                marginTop: 5,
            }}
            />
        </View>

        <View style={{width: '40%', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
            <TouchableOpacity style={{backgroundColor: 'white', width: '100%', padding: 13, borderRadius: 10, alignItems: 'center'}} onPress={handleLoginUp}>
                <Text style={{color: '#EF4141'}}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:5, backgroundColor: 'white', width: '100%', padding: 13, borderRadius: 10, alignItems: 'center'}} onPress={onPressModalOpen}>
                <Text style={{color: '#EF4141'}}>회원가입</Text>
            </TouchableOpacity>
        </View>

        <View style={{ marginTop: 400 }}>
                <Modal
                    animationType="slide"
                    visible={isModalVisible}
                    transparent={true}
                >
                    <View style={styles.modalView}>
                        <LyokoB style={{marginBottom: 10}}/>
                        <View style={{width: '150%',}}>
                            <TextInput
                            placeholder="이메일"
                            value={email}
                            onChangeText={text => setEmail(text)}
                            autoCapitalize={'none'}
                            style={{
                                backgroundColor: 'white',
                                paddingHorizontal: 15,
                                paddingVertical: 10,
                                borderRadius: 10,
                                borderWidth:1,
                                borderColor: '#EF4141',
                            }}
                            />
                            <TextInput
                            placeholder="비밀번호"
                            value={password}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry
                            autoCapitalize={'none'}
                            style={{
                                bbackgroundColor: 'white',
                                paddingHorizontal: 15,
                                paddingVertical: 10,
                                borderRadius: 10,
                                borderWidth:1,
                                borderColor: '#EF4141',
                                marginTop: 8,
                            }}
                            />
                            <TextInput
                            placeholder="비밀번호 확인"
                            value={confirmpassword}
                            onChangeText={text => setConfirmPassword(text)}
                            secureTextEntry
                            autoCapitalize={'none'}
                            style={{
                                bbackgroundColor: 'white',
                                paddingHorizontal: 15,
                                paddingVertical: 10,
                                borderRadius: 10,
                                borderWidth:1,
                                borderColor: '#EF4141',
                                marginTop: 8,
                            }}
                            />
                            <TextInput
                            placeholder="닉네임"
                            value={nickname}
                            onChangeText={text => setNickname(text)}
                            style={{
                                bbackgroundColor: 'white',
                                paddingHorizontal: 15,
                                paddingVertical: 10,
                                borderRadius: 10,
                                borderWidth:1,
                                borderColor: '#EF4141',
                                marginTop: 8,
                            }}
                            />
                            <TextInput
                            placeholder="성별"
                            value={sex}
                            onChangeText={text => setSex(text)}
                            style={{
                                bbackgroundColor: 'white',
                                paddingHorizontal: 15,
                                paddingVertical: 10,
                                borderRadius: 10,
                                borderWidth:1,
                                borderColor: '#EF4141',
                                marginTop: 8,
                            }}
                            />
                            <TextInput
                            placeholder="생년월일"
                            value={birth}
                            onChangeText={text => setBirth(text)}
                            style={{
                                bbackgroundColor: 'white',
                                paddingHorizontal: 15,
                                paddingVertical: 10,
                                borderRadius: 10,
                                borderWidth:1,
                                borderColor: '#EF4141',
                                marginTop: 8,
                            }}
                            />
                            <TextInput
                            placeholder="국적"
                            value={country}
                            onChangeText={text => setCountry(text)}
                            style={{
                                bbackgroundColor: 'white',
                                paddingHorizontal: 15,
                                paddingVertical: 10,
                                borderRadius: 10,
                                borderWidth:1,
                                borderColor: '#EF4141',
                                marginTop: 8,
                            }}
                            />
                        </View>
                        <View style={{width: '60%', justifyContent: 'center', alignItems: 'center', marginTop: 15, flexDirection: 'row'}}>
                            <TouchableOpacity style={{backgroundColor: '#EF4141', width: '100%', padding: 13, borderRadius: 10, alignItems: 'center', marginRight: 10}} onPress={handleSignUp}>
                                <Text style={{color: 'white'}}>회원가입</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#EF4141', width: '100%', padding: 13, borderRadius: 10, alignItems: 'center'}} onPress={onPressModalClose}>
                                <Text style={{color: 'white'}}>돌아가기</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>

    </SafeAreaView>
  )
};

export default Login;

const styles = StyleSheet.create({
    modalView: {
        marginTop: 120,
        margin: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 80,
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 3,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTextStyle: {
        color: '#17191c',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 10
    },
});