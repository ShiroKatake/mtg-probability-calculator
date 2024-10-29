import { Chart } from "primereact/chart";
import { useAppContext } from "@/app/context/AppContext";
import { hypergeometric } from "@utils/hypergeometric/hypergeometric";
import { percentage } from "@utils/percentage/percentage";
import { round } from "@utils/round/round";
import { rangeText } from "@/app/utils/rangeText/rangeText";
import { Input } from "../DataInput/components/Input/Input";
import { Inplace, InplaceDisplay, InplaceContent } from "primereact/inplace";
import { InputNumber } from "primereact/inputnumber";
import { useEffect, useState } from "react";

export const OpeningHandStat: React.FC = () => {
  const {
    deckSize,
    cardsDrawn,
    successInDeck,
    successMin,
    setSuccessMin,
    successMax,
    setSuccessMax,
    calculate,
  } = useAppContext();

  const [min, setMinValue] = useState(3);
  const [max, setMaxValue] = useState(3);
  const [hasRange, setHasRange] = useState(false);

  const data: any = {
    labels: [],
    datasets: [
      {
        label: "Chance",
        data: [],
        borderWidth: 1,
      },
    ],
  };

  const option = {
    plugins: {
      title: {
        display: true,
        text: "Chance to draw exactly:",
        font: {
          size: 14,
        },
      },
      legend: false,
    },
    scales: {
      y: {
        ticks: {
          callback: function (value: any) {
            return value + "%";
          },
        },
      },
    },
  };

  let totalProbability = 0;
  let atLeastProbability = 0;
  if (calculate) {
    let minOrLessProbability = 0;
    for (let i = 0; i <= cardsDrawn; i++) {
      const probability = hypergeometric(
        deckSize,
        cardsDrawn,
        successInDeck,
        i
      );
      data.labels.push(`${i} cards`);
      data.datasets[0].data.push(round(probability * 100, 1));
      if (i < successMin) minOrLessProbability += probability;
      if (i >= successMin && i <= successMax) totalProbability += probability;
    }
    atLeastProbability = 1 - minOrLessProbability;
  }

  const averageMulliganCount = round(1 / totalProbability, 0);

  useEffect(() => {
    setSuccessMin(hasRange ? (min > max ? max : min) : min);
    setSuccessMax(hasRange ? (min > max ? min : max) : min);
  }, [hasRange, min, max, setSuccessMax, setSuccessMin]);

  return (
    <div>
      <Input
        className="col-12 md:col-2"
        label="Desired Cards to draw"
        description="Number of desired cards to draw in hand"
        id="min"
        name="min"
        value={min}
        setValue={setMinValue}
      >
        <Inplace
          closable
          onOpen={() => {
            setHasRange(true);
          }}
          onClose={() => {
            setMaxValue(min);
            setHasRange(false);
          }}
          className="flex col"
        >
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
      {calculate && (
        <>
          <p>
            Chance to draw {rangeText(successMin, successMax)} desired cards:{" "}
            {percentage(totalProbability)}
          </p>
          <p>
            Chance to draw {successMin} or more desired cards:{" "}
            {percentage(atLeastProbability)}
          </p>
          <p>
            Chance to draw 0 desired cards:{" "}
            {percentage(hypergeometric(deckSize, cardsDrawn, successInDeck, 0))}
          </p>
          <Chart type="bar" data={data} options={option} />
          <p>
            It&apos;ll take {averageMulliganCount} mulligans on average to draw
            a hand with {rangeText(successMin, successMax)} desired cards
          </p>
        </>
      )}
    </div>
  );
};
