"use client";
import { Input } from "./components/Input/Input";
import { Button } from "primereact/button";
import { hypergeometric } from "../../utils/hypergeometric/hypergeometric";
import { useAppContext } from "@/app/context/AppContext";

export default function Home() {
  const { N, setN, n, setn, k, setk, x, setx } = useAppContext();
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
            hypergeometric(N, n, k, x);
          }}
        />
      </form>
    </main>
  );
}
