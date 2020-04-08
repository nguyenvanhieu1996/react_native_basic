import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ToDoItem = ({ item, onPressItem }) => {

    return (
        <TouchableOpacity onPress={() => onPressItem(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        borderColor: '#bbb',
        marginBottom: 5,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }

})
export default ToDoItem