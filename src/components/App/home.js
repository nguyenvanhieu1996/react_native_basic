

import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles } from './styles/global'
import Card from './shared/Card';
import ReviewForm from './reviewForm';

const HomeApp = ({ navigation }) => {

    const [reviews, setReviews] = useState([
        { id: 1, title: 'Title 1', body: 'body 1', rating: '1' },
        { id: 2, title: 'Title 2', body: 'body 2', rating: '2' },
        { id: 3, title: 'Title 3', body: 'body 3', rating: '3' },
        { id: 4, title: 'Title 4', body: 'body 4', rating: '4' },
        { id: 5, title: 'Title 5', body: 'body 5', rating: '5' },
    ])
    const onNext = (item) => {
        // navigation.push('ReviewDetail', item)
        navigation.navigate('ReviewDetail', item)
    }

    useEffect(() => {
        navigation.popToTop()
    }, [])

    const addReview = (dataReview, actions) => {
        setReviews((reviewsCurrent) => {
            return [
                {
                    id: Math.random(),
                    ...dataReview,
                },
                ...reviewsCurrent
            ]
        })
        actions.resetForm()
    }

    return (
        <ScrollView>
            <View style={globalStyles.container}>
                <ReviewForm addReview={addReview} />
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={reviews}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => onNext(item)}>
                            <Card>
                                <Text style={globalStyles.titleText}>{item.title}</Text>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 20,
    }
})
export default HomeApp