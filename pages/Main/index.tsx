import React from "react";
import { Text, View } from "react-native";
import CreditCard from "./components/CreditCard";
import YourMoney from "./components/YourMoney";
import TapForMoney from "./components/TapForMoney";
import MainProvider from "./MainContext";

const Main = () => {
  return (
    <View>
      <MainProvider>
        <View>
          <CreditCard />
          <YourMoney />
          <Text>Boost</Text>
          <TapForMoney />
        </View>
      </MainProvider>
    </View>
  );
};

export default Main;
