import { StyleSheet } from 'react-native'


export const globalStyles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 10,
        backgroundColor: '#F5FCFF',
        // position: 'relative'
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 20,
    },
    paragraph: {
        marginHorizontal: 8,
        lineHeight: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginTop: 3,
        marginBottom: 6,
        // height: 15
    },
    marginBt15: {
        marginBottom: 15,
    }
})