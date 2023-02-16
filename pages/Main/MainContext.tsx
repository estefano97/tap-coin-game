import React, { useState, createContext, SetStateAction, Dispatch } from "react";

export interface IMainContext {
  setMoneyValue: Dispatch<SetStateAction<number>>;
  MoneyValue: number;
  MoneyPerClick: number, 
  setMoneyPerClick: Dispatch<SetStateAction<number>>;
}
export const MainContext = createContext<IMainContext>({
  MoneyValue: 10,
  setMoneyValue: () => {},
  MoneyPerClick: 1, 
  setMoneyPerClick: () => {}
});

const MainProvider = (props: { children: JSX.Element }) => {
  const [MoneyValue, setMoneyValue] = useState<number>(10);
  const [MoneyPerClick, setMoneyPerClick] = useState<number>(1);

  return (
    <MainContext.Provider
      value={{
        MoneyValue,
        setMoneyValue,
        MoneyPerClick, setMoneyPerClick
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainProvider;