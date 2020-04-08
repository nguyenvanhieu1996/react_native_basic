import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

const State = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Steven')
    const [dataTest, setDataTest] = useState([])

    useEffect(() => {
        const data = []
        for (let i = 0; i <= 8; i++) {
            data.push({
                id: i,
                people: `Join ${i}`
            })
        }
        setDataTest(data)
    }, [])

    const [people, setPeople] = useState([
        { key: 1, people: 'Join 1' },
        { key: 2, people: 'Join 2' },
        { key: 3, people: 'Join 3' },
        { key: 4, people: 'Join 4' },

    ])
    const onCount = () => {
        setCount(count + 1)
    }

    const onPressItem = (id) => {
        setDataTest((prevDataTest) =>
            prevDataTest.filter((item) => item.id !== id)
        )
    }

    return (
        <View style={styles.container}>
            {/* key is type string, if object don't have property 'key' must have keyExtractor set key */}
            <FlatList
                data={dataTest}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => onPressItem(item.id)}>
                            <Text
                                style={[styles.item, index % 2 === 0 ? styles.itemBackgroundGreen : styles.itemBackgroundYellow]}>
                                {item.people}
                            </Text>
                        </TouchableOpacity>
                    )
                }}
            />

            <ScrollView>
                {
                    people.map((item, i) => {
                        return (
                            <View key={i}>
                                <Text
                                    style={[styles.item, i % 2 === 0 ? styles.itemBackgroundGreen : styles.itemBackgroundYellow]}>
                                    {item.people}
                                </Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
            <TextInput
                style={styles.input}
                placeholder="Name"
                multiline
                onChangeText={(val) => setName(val)} />
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                placeholder="Age"
            />
            <Text>This is {name}</Text>
            <Text>This is {count}</Text>
            <Button title="Click add count" onPress={() => onCount()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        margin: 20,
        padding: 15
    },
    item: {
        marginTop: 10,
        padding: 30,
        backgroundColor: 'green',
        fontSize: 16,
        marginHorizontal: 5,

    },
    itemBackgroundYellow: {
        backgroundColor: 'yellow',
    },
    itemBackgroundGreen: {
        backgroundColor: 'green',
    }
})
export default State