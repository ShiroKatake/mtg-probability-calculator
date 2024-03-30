import { ReactNode, createContext, useContext, useState } from "react";

interface AppContextProviderProps {
  children: ReactNode;
}

interface IAppContext {
  deckSize: number;
  setDeckSize: (deckSize: number) => void;
  cardsDrawn: number;
  setCardsDrawn: (cardsDrawn: number) => void;
  successInDeck: number;
  setSuccessInDeck: (successInDeck: number) => void;
  successInHand: number;
  setSuccessInHand: (successInHand: number) => void;
  calculate: boolean;
  setCalculate: (calculate: boolean) => void;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [deckSize, setDeckSize] = useState(99);
  const [cardsDrawn, setCardsDrawn] = useState(7);
  const [successInDeck, setSuccessInDeck] = useState(10);
  const [successInHand, setSuccessInHand] = useState(1);
  const [calculate, setCalculate] = useState(false);

  const appContext = {
    deckSize,
    setDeckSize,
    cardsDrawn,
    setCardsDrawn,
    successInDeck,
    setSuccessInDeck,
    successInHand,
    setSuccessInHand,
    calculate,
    setCalculate,
  };

  return <AppContext.Provider value={appContext}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
