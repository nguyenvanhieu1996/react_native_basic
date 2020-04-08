import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { globalStyles } from './styles/global'
import Card from './shared/Card';
import { divide } from 'react-native-reanimated';


const ReviewDetail = ({ route, navigation }) => {
  
    const rating = navigation.getParam('rating')
    const images = {
        ratings: {
            "1": require('../../../assets/rating-1.png'),
            "2": require('../../../assets/rating-2.png'),
            "3": require('../../../assets/rating-3.png'),
            "4": require('../../../assets/rating-4.png'),
            "5": require('../../../assets/rating-5.png'),
        }
    }
    // Image.getSize('../../../assets/rating-1.png', (width, height) => { console.log(width) });

    console.log('render')
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')
    const [number, setNumber] = useState({
        width: '',
        height: ''
    })
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
                <Text style={globalStyles.titleText}>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating: </Text>
                    {
                        Image.getSize(images.ratings[rating], (width1, height1) => {
                            setWidth(width1)
                            setHeight(height1)
                            // setNumber({
                            //     width: width1,
                            //     height: height1
                            // })
                        })

                    }
                    {/* <Image
                        style={{ width: width, height: height }}
                        source={images.ratings[rating]}
                        resizeMode="contain"
                    /> */}

                      <Image
                        style={styles.image}
                        source={images.ratings[rating]}
                        resizeMode="contain"
                    />
                </View>
            </Card>

        </View>
    )
}

const win = Dimensions.get('window');
// const ratio = Dimensions.getSize();


const styles = StyleSheet.create({
    rating: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
        // flexDirection: 'row',
        // justifyContent: 'flex-start',
        // paddingTop: 16,
        // marginTop: 16,
        // borderTopWidth: 1,
        // borderTopColor: '#eee',
        // justifyContent: 'flex-start'
    },
    text: {
        flex: 1,
    },

    image: {
        // flex: .5,
        width : win.width / 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        height: 21, //362 is actual height of image

    }
})
export default ReviewDetail