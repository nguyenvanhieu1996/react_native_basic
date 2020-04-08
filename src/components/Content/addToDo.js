import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';

const AddToDo = ({ addToDo }) => {
    const [text, setText] = useState('')

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="New todo ..."
                onChangeText={(val) => setText(val)}
            />
            <Button style={styles.button} title="ADD TODO" color="coral" onPress={() => addToDo(text)} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingVertical: 5,
    },
    
})
export default AddToDo