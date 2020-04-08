import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { globalStyles } from './styles/global'
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import FlatButton from './shared/FlatButton';

const ReviewForm = ({ addReview }) => {
    console.log('render');

    const validateSchema = () => {
        console.log('object')
        return Yup.object({
            title: Yup.string()
                .required()
                .min(4),
            body: Yup.string()
                .required()
                .min(8),
            rating: Yup.string()
                .required()
                .test('is rating from 1 to 5', 'Rating must be a number 1 - 5', (val) => {
                    return val && parseInt(val) > 0 && parseInt(val) <= 5
                }),
        })
    }
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={validateSchema}
                onSubmit={(values, actions) => addReview(values, actions)}
            >
                {({ values, handleChange, handleSubmit, handleBlur, errors }) => (
                    <>
                        <TextInput
                            name="title"
                            style={globalStyles.input}
                            placeholder="Review title"
                            value={values.title}
                            onChangeText={handleChange('title')}
                        />
                        <Text style={globalStyles.errorText}>
                            <ErrorMessage name="title" />
                        </Text>

                        <TextInput
                            name="body"
                            style={globalStyles.input}
                            placeholder="Review body"
                            onChangeText={handleChange('body')}
                            value={values.body}
                        />
                        <Text style={globalStyles.errorText}>
                            <ErrorMessage name="body" />
                        </Text>

                        <TextInput
                            name="rating"
                            style={globalStyles.input}
                            placeholder="Review rating (1 -> 5)"
                            onChangeText={handleChange('rating')}
                            value={values.rating}
                            keyboardType="numeric"
                        />
                        <Text style={globalStyles.errorText}>
                            <ErrorMessage name="rating" />
                        </Text>
                        <FlatButton text="Submit" onPress={handleSubmit} style={globalStyles.marginBt15}/>
                    </>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 20,
    }
})
export default ReviewForm