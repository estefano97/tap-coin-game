import React, {useContext} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MainContext } from '../MainContext';

const UpgradeLevel = () => {

    const { MoneyValue, setMoneyValue, setMoneyPerClick, MoneyPerClick } = useContext(MainContext);

    const handleAddFivePH = () => {
        setMoneyValue(MoneyValue - 450);
        setMoneyPerClick(5);
    };

    const handleAddFiveteenPH = () => {
        setMoneyValue(MoneyValue - 4500);
        setMoneyPerClick(15);
    }
    
  return (
    <View>
        {MoneyValue > 500 && MoneyPerClick < 5 && <TouchableOpacity style={styles.upgradeContainer} onPress={handleAddFivePH}><Text>Upgrade Yourn Earn Per Hour to 5/Click For $450</Text></TouchableOpacity>}
        {MoneyValue > 5000 && MoneyPerClick < 15 && <TouchableOpacity style={styles.upgradeContainer} onPress={handleAddFiveteenPH}><Text>Upgrade Yourn Earn Per Hour to 15/Click For $4500</Text></TouchableOpacity>}
    </View>
  )
}

const styles = StyleSheet.create({
    upgradeContainer: {
      backgroundColor: "#00BF63",
      height: 75,
      fontSize: 40,
      display: "flex",
      justifyContent: "center",
      alignItems: 'center'
    }
  });

export default UpgradeLevel