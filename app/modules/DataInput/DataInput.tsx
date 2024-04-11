"use client";
import { Input } from "./components/Input/Input";
import { Button } from "primereact/button";
import { useAppContext } from "@/app/context/AppContext";
import { useState } from "react";
import { GridRuler } from "@/app/utils/gridRuler/gridRuler";

interface DataInputProps {
  className?: string;
}

export const DataInput: React.FC<DataInputProps> = ({ className }) => {
  const { setDeckSize, setCardsDrawn, setSuccessInDeck, setSuccessInHand, setCalculate } = useAppContext();
  const [N, setN] = useState(99);
  const [n, setn] = useState(7);
  const [k, setk] = useState(10);
  const [x, setx] = useState(1);

  return (
    <form className={`flex flex-column gap-2 sm:gap-3 ${className}`}>
      {/* <GridRuler /> */}
      <Input
        label="Population Size"
        description="Number of cards in the deck / library"
        id="input"
        name="N"
        value={N}
        setValue={setN}
      />
      <Input
        label="Sample Size"
        description="Number of cards we are drawing in opening hand"
        id="input"
        name="n"
        value={n}
        setValue={setn}
      />
      <Input
        label="Successes in Population"
        description="Number of cards you want that is in the deck / library"
        id="input"
        name="k"
        value={k}
        setValue={setk}
      />
      <Input
        label="Successes in Sample"
        description="Number of wanted cards you want to draw in your opening hand"
        id="input"
        name="x"
        value={x}
        setValue={setx}
      />
      <div className="grid">
        <div className="col-offset-3 sm:col-offset-7 md:col-offset-8 col-6 sm:col-3 lg:col-3">
          <Button
            className="w-full"
            size="small"
            label="Calculate"
            onClick={(e) => {
              e.preventDefault();
              setDeckSize(N);
              setCardsDrawn(n);
              setSuccessInDeck(k);
              setSuccessInHand(x);
              setCalculate(true);
            }}
          />
        </div>
      </div>
    </form>
  );
};
