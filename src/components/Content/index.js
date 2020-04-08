import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import ToDoItem from './todoItem';
import AddToDo from './addToDo';

const Content = () => {
    const [todos, setTodos] = useState([
        { key: 1, text: 'buy phone' },
        { key: 2, text: 'buy home' },
        { key: 3, text: 'buy car' },
        { key: 4, text: 'buy anything' },
    ])

    const onPressItem = (key) => {
        setTodos((prevToDos) => prevToDos.filter((item) => item.key !== key))
    }

    const addToDo = (text) => {
        if (text.trim().length > 3) {
            setTodos((prevToDos) => {
                return [
                    { key: Math.random(), text },
                    ...prevToDos,
                ]
            })
        } else {
            Alert.alert('OPPS!', 'Todos must be over 3 char long', [
                {text: 'Understood', onPress: console.log('object') }
            ])
        }

    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <AddToDo addToDo={addToDo} />
            </View>
            <FlatList
                keyExtractor={(item) => item.key.toString()}
                data={todos}
                renderItem={({ item, index }) => {
                    return (
                        <ToDoItem item={item} onPressItem={onPressItem} />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        marginTop: 20,
    },
    header: {
        backgroundColor: '#f63',
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        marginBottom: 20,
    }

})
export default Content