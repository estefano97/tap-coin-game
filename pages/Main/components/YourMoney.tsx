import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MainContext } from '../MainContext';
import UpgradeLevel from './UpgradeLevel';

const YourMoney = () => {

  const { MoneyValue } = useContext(MainContext);

  return (
    <View style={styles.container}>
        <Text style={styles.principalText}>You have:</Text>
        <View style={styles.priceContainer}>
        <Text style={styles.priceText}> ${MoneyValue}</Text>
        </View>
        <UpgradeLevel />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 75,
        color: "red",
        display: "flex",
        alignContent: "center",
        justifyContent:"center",
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#1D1C72"
    },
    priceContainer: {
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
    },
    principalText: {
        fontSize: 18,
        color: "#1D1C72"
    },
    priceText: {
        fontSize: 32,
        color: "#01524A",
        display: "flex",
        alignContent: "center",
        justifyContent:"center"
    }
  }); 

export default YourMoney