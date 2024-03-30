"use client";
import { Input } from "./components/Input/Input";
import { Button } from "primereact/button";
import { useAppContext } from "@/app/context/AppContext";
import { useState } from "react";

export default function Home() {
  const { setDeckSize, setCardsDrawn, setSuccessInDeck, setSuccessInHand, setCalculate } = useAppContext();
  const [N, setN] = useState(99);
  const [n, setn] = useState(7);
  const [k, setk] = useState(10);
  const [x, setx] = useState(1);

  return (
    <main>
      <form className="flex flex-column gap-3">
        <Input
          label="Population Size"
          description="Cards in your deck / library you are drawing from"
          id="input"
          name="N"
          value={N}
          setValue={setN}
        />
        <Input
          label="Sample Size"
          description="Number of cards we are drawing ex. cards in opening hand"
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
          description="Number of wanted cards you want to draw"
          id="input"
          name="x"
          value={x}
          setValue={setx}
        />
        <Button
          className="col-3"
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
      </form>
    </main>
  );
}
