import { ReactNode, createContext, useContext, useState } from "react";

interface AppContextProviderProps {
  children: ReactNode;
}

interface IAppContext {
  N: number;
  setN: React.Dispatch<React.SetStateAction<number>>;
  n: number;
  setn: React.Dispatch<React.SetStateAction<number>>;
  k: number;
  setk: React.Dispatch<React.SetStateAction<number>>;
  x: number;
  setx: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [N, setN] = useState(99);
  const [n, setn] = useState(7);
  const [k, setk] = useState(10);
  const [x, setx] = useState(1);

  const appContext = {
    N,
    setN,
    n,
    setn,
    k,
    setk,
    x,
    setx,
  };

  return <AppContext.Provider value={appContext}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
