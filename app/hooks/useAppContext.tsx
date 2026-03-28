import {createContext, useContext, useRef, useState} from "react";
import {ConfirmDialog} from "primereact/confirmdialog";
import {Toast} from "primereact/toast";
import {useCardGroups} from "./useCardGroups";

type AppDataContext = ReturnType<typeof useAppData>;

const useAppData = () => {
  const [appData, setAppData] = useState({
    deckSize: 99,
    handSize: 7,
  });
  const [calculate, setCalculate] = useState(false);
  const cardGroups = useCardGroups();
  const toastRef = useRef<Toast>(null);

  return {
    calculate,
    setCalculate,
    ...appData,
    ...cardGroups,
    setAppData,
    toastRef,
  };
};

const AppContext = createContext<AppDataContext | null>(null);

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {
  const appContext = useAppData();
  const toastRef = useRef<Toast>(null);

  return (
    <AppContext.Provider value={appContext}>
      <Toast ref={toastRef} position="bottom-right" />
      <ConfirmDialog />
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return ctx;
};
