"use client";
import { Input } from "./components/Input/Input";
import { Button } from "primereact/button";
import { useAppContext } from "@/app/context/AppContext";
import { useState } from "react";

export const DataInput: React.FC = () => {
  const { setDeckSize, setCardsDrawn, setSuccessInDeck, setCalculate } = useAppContext();
  const [N, setN] = useState(99);
  const [n, setn] = useState(7);
  const [k, setk] = useState(12);

  return (
    <form className="flex flex-column gap-2">
      <Input label="Deck Size" description="Number of cards in the deck" id="input" name="N" value={N} setValue={setN} />
      <Input
        label="Starting Hand Size"
        description="Number of cards we are drawing in starting hand"
        id="input"
        name="n"
        value={n}
        setValue={setn}
      />
      <Input
        label="Desired Cards in Deck"
        description="Number of cards you want that is in the deck"
        id="input"
        name="k"
        value={k}
        setValue={setk}
      />

      <div className="grid">
        <div className="col-offset-3 md:col-offset-9 col-6 md:col-3">
          <Button
            className="w-full"
            size="small"
            label="Calculate"
            onClick={(e) => {
              e.preventDefault();
              setDeckSize(N);
              setCardsDrawn(n);
              setSuccessInDeck(k);
              setCalculate(true);
            }}
          />
        </div>
      </div>
    </form>
  );
};
