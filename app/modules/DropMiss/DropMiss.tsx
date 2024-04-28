import { useAppContext } from "@/app/context/AppContext";
import { dropMiss } from "@/app/utils/hypergeometric/hypergeometric";
import { Input } from "../DataInput/components/Input/Input";
import { Chart } from "primereact/chart";
import { Chart as ChartJS } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { useState } from "react";

ChartJS.register(annotationPlugin);

export const DropMiss: React.FC = () => {
  const { deckSize, successInDeck, cardsDrawn, successMax, calculate } = useAppContext();
  const [desiredDrawn, setDesiredCount] = useState(successMax);
  const [unDesiredDrawn, setUndesiredCount] = useState(cardsDrawn - successMax);

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

  const annotationLine = {
    type: "line",
    borderColor: "rgb(194, 58, 48)",
    borderWidth: 2,
    label: {
      backgroundColor: "rgb(165, 59, 51)",
      content: "Miss Threshold",
      display: true,
      position: "start",
    },
    scaleID: "y",
    value: 50,
  };

  const option = {
    plugins: {
      title: {
        display: true,
        text: "Chance to draw desired cards consecutively:",
        font: {
          size: 14,
        },
      },
      legend: false,
      annotation: {
        annotations: { annotationLine },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value: any) {
            return value + "%";
          },
          stepSize: 20,
        },
      },
    },
  };

  const probabilityData = dropMiss(deckSize, desiredDrawn + unDesiredDrawn, successInDeck, desiredDrawn);

  for (let drawNumber = 0; drawNumber < probabilityData.length; drawNumber++) {
    data.datasets[0].data.push(probabilityData[drawNumber]);
    data.labels.push(`Draw #${drawNumber + 1}`);
  }

  return (
    <div className="flex flex-column gap-2">
      <Input
        className="col-12 md:col-5"
        labelClassName="col-12 md:col-7"
        label="Desired Cards drawn"
        description="Number of desired cards you have drawn (include starting hand)"
        id="input"
        name="n"
        value={desiredDrawn}
        setValue={setDesiredCount}
      />
      <Input
        className="col-12 md:col-5"
        labelClassName="col-12 md:col-7"
        label="Undesired Cards drawn"
        description="Number of undesired cards you have drawn (include starting hand)"
        id="input"
        name="n"
        value={unDesiredDrawn}
        setValue={setUndesiredCount}
      />
      {calculate && (
        <>
          <Chart type="bar" data={data} options={option} />
          <p>
            Having drawn {desiredDrawn} desired cards ({successInDeck - desiredDrawn} remaining in deck), you&apos;ll most likely
            miss after {probabilityData.length - 1} draw(s)
          </p>
        </>
      )}
    </div>
  );
};
