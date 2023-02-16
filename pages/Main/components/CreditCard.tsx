import React from 'react'
import { Image, StyleSheet, View } from 'react-native';

const CreditCard = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.imageStyle} source={require('../../../assets/credit-image.png')} />
    </View>
  )

}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#CBBEB5',
      maxHeight: 200
    },
    text: {
      fontSize: 128,
      color: "red"
    },
    imageStyle: {
      width: 340,
      height: 205,
      borderRadius: 10,
      marginHorizontal: 10,
      marginTop: 65
    }
  });

export default CreditCard