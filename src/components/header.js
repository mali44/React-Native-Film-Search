import React from 'react';
import { Text, View } from 'react-native';
import { Header } from "react-navigation";



const CustomHeader = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle} >
            <Header {...props} />

        </View>
    );
}
const styles = {
    viewStyle: {
        backgroundColor: '#6200EE',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#212121',
        shadowOffset: { width: 5, height: 12 },
        shadowOpacity: 0.3,
        position: 'relative',
        elevation: 2
    },
    textStyle: {
        fontSize: 20
    }
}
export default CustomHeader;