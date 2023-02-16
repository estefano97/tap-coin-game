import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MainContext } from "../MainContext";

const TapForMoney = () => {

    const { MoneyValue, setMoneyValue, MoneyPerClick } = useContext(MainContext);

  const onClickTapMoney = () => {
    setMoneyValue(MoneyValue + MoneyPerClick);
  };

  return (
    <View>
      <TouchableOpacity onPress={onClickTapMoney}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText} >Press to earn!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#c0c0c0",
    width: 320,
    height: 275,
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 25,
    color: "#181818",
  },
});

export default TapForMoney;
