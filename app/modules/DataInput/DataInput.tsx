"use client";
import {useState} from "react";
import {InputNumber} from "primereact/inputnumber";
import {Button} from "@/components/Button/Button";
import {CardGroups} from "@/components/CardGroup/CardGroup";
import {InputWrapper} from "@/components/Input/Input";
import {useAppContext} from "@/hooks/useAppContext";

export const DataInput: React.FC = () => {
  const {deckSize, handSize, setAppData, setCalculate} = useAppContext();
  const [deckSizeValue, setDeckSizeValue] = useState(deckSize);
  const [handSizeValue, setHandSizeValue] = useState(handSize);

  return (
    <form className="flex flex-column gap-2">
      <InputWrapper label="Deck Size" description="Number of cards in the deck">
        <InputNumber
          className="w-full"
          inputClassName="w-full"
          name="deckSize"
          value={deckSizeValue}
          onValueChange={(e) => setDeckSizeValue(e.value ?? 0)}
          showButtons
        />
      </InputWrapper>
      <InputWrapper
        label="Starting Hand Size"
        description="Number of cards to draw in starting hand"
      >
        <InputNumber
          className="w-full"
          inputClassName="w-full"
          name="handSize"
          value={handSizeValue}
          onValueChange={(e) => setHandSizeValue(e.value ?? 0)}
          showButtons
        />
      </InputWrapper>

      <CardGroups />

      <div className="grid">
        <div className="col-offset-3 md:col-offset-9 col-6 md:col-3">
          <Button
            className="w-full"
            size="small"
            label="Calculate"
            onClick={() => {
              setAppData((prev) => ({
                ...prev,
                deckSize: deckSizeValue,
                handSize: handSizeValue,
              }));
              setCalculate(true);
            }}
          />
        </div>
      </div>
    </form>
  );
};
