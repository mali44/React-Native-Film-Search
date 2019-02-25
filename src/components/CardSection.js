import React from 'react';
import {View} from 'react-native';

const CardSection =(props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles={
    containerStyle:{
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#212121',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColorm: 'ddd',
        position: 'relative',
        
    }
}
const s = ({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: 'red',
      opacity: 0.3
    }
  });
export default CardSection;