"use client";
import { Input } from "./components/Input/Input";
import { Button } from "primereact/button";
import { useAppContext } from "@/app/context/AppContext";
import { useState } from "react";
import { GridRuler } from "@/app/utils/gridRuler/gridRuler";
import { Inplace, InplaceDisplay, InplaceContent } from "primereact/inplace";
import { InputNumber } from "primereact/inputnumber";
interface DataInputProps {
  className?: string;
}

export const DataInput: React.FC<DataInputProps> = ({ className }) => {
  const { setDeckSize, setCardsDrawn, setSuccessInDeck, setSuccessMin, setSuccessMax, setCalculate } = useAppContext();
  const [N, setN] = useState(99);
  const [n, setn] = useState(7);
  const [k, setk] = useState(10);
  const [min, setMinValue] = useState(1);
  const [max, setMaxValue] = useState(2);

  return (
    <form className={`flex flex-column gap-2 sm:gap-3 ${className}`}>
      {/* <GridRuler /> */}
      <Input
        label="Deck Size"
        description="Number of cards in the deck / library"
        id="input"
        name="N"
        value={N}
        setValue={setN}
      />
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
        description="Number of cards you want that is in the deck / library"
        id="input"
        name="k"
        value={k}
        setValue={setk}
      />
      <Input
        className="col-12 md:col-2"
        label="Desired Cards in Hand"
        description="Number of desired cards you want in starting hand"
        id="min"
        name="min"
        value={min}
        setValue={setMinValue}
      >
        <Inplace closable onOpen={() => setMaxValue(min + 1)} onClose={() => setMaxValue(min)} className="flex col">
          <InplaceDisplay>{"Add range?"}</InplaceDisplay>
          <InplaceContent>
            <span className="pr-2">to</span>
            <InputNumber
              className="w-5 md:w-8 lg:w-9 xl:w-7"
              inputClassName="w-full"
              id="max"
              name="max"
              value={max}
              onChange={(e) => setMaxValue(e.value ?? 0)}
              autoFocus
              showButtons
            />
          </InplaceContent>
        </Inplace>
      </Input>
      <div className="grid">
        <div className="col-offset-3 sm:col-offset-9 col-6">
          <Button
            className="w-full"
            size="small"
            label="Calculate"
            onClick={(e) => {
              e.preventDefault();
              setDeckSize(N);
              setCardsDrawn(n);
              setSuccessInDeck(k);
              setSuccessMin(min);
              setSuccessMax(max);
              setCalculate(true);
            }}
          />
        </div>
      </div>
    </form>
  );
};
