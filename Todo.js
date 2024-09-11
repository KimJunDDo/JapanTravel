import { StyleSheet, Text, View, navigation, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import React from 'react';
import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem';
import { useSelector } from'react-redux';
import { useNavigation } from '@react-navigation/native';
import Lyoko from '../../assets/svg/Lyoko.svg';

const Todo = () => {
    const navigation = useNavigation();
    const todos = useSelector(state => state.todo.todos);
    const todoTasks = todos.filter((item) => item.state === 'todo');
    const completedTasks = todos.filter((item) => item.state === 'done');
   
    const combinedTasks = [
        ...todoTasks.map(task => ({ ...task, completed: false })),
        ...completedTasks.map(task => ({ ...task, completed: true })),
      ];

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
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ color: '#ef4141', paddingRight: 5, paddingBottom: 10}}>완료</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listView}>
                {combinedTasks.length !== 0 ? (
                    <FlatList
                    data={combinedTasks}
                    renderItem={({ item }) => <TodoItem {...item} />}
                    keyExtractor={(item) => item.id}
                    />
                ) : (
                    <Text style={styles.emptyListText}>할 일이 없습니다.</Text>
                )}
            </View>
            
        <TodoInput />
    </SafeAreaView>
    )
}

export default Todo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    pageTitle: {
        marginBottom: 35,
        paddingHorizontal: 15,
        fontSize: 54,
        fontWeight: '600'
    },
    listView: {
        flex: 1
    },
    emptyListText: {
        paddingTop: 10,
        paddingBottom: 15,
        paddingHorizontal: 15,
        fontSize: 20,
        lineHeight: 20,
        color: '#767676'
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})
