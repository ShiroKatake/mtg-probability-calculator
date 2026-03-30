import {useState} from "react";
import {useAppContext} from "@/hooks/useAppContext";
import {dropMiss} from "@utils";
import {InputNumber} from "primereact/inputnumber";
import {Chart} from "primereact/chart";
import {Chart as ChartJS} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import {InputWrapper} from "../../components/Input/Input";

ChartJS.register(annotationPlugin);

export const DropMiss: React.FC = () => {
  const {deckSize, handSize: cardsDrawn, calculate} = useAppContext();
  const [desiredDrawn, setDesiredCount] = useState(0);
  const [unDesiredDrawn, setUndesiredCount] = useState(cardsDrawn - desiredDrawn);
  const successInDeck = 37;

  const data: any = {
    labels: [],
    datasets: [
      {
        label: "Chance",
        data: [],
        backgroundColor: "rgba(158, 46, 70, 0.9)",
        borderColor: "rgb(180, 31, 51)",
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
        annotations: {annotationLine},
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

  const probabilityData = dropMiss(
    deckSize,
    desiredDrawn + unDesiredDrawn,
    successInDeck,
    desiredDrawn,
  );

  for (let drawNumber = 0; drawNumber < probabilityData.length; drawNumber++) {
    data.datasets[0].data.push(probabilityData[drawNumber]);
    data.labels.push(`Draw #${drawNumber + 1}`);
  }

  return (
    <div className="flex flex-column gap-2">
      <InputWrapper
        label="Desired Cards drawn"
        description="Number of desired cards you have drawn (include starting hand)"
      >
        <InputNumber
          className="w-full"
          inputClassName="w-full"
          name="n"
          value={desiredDrawn}
          onValueChange={(e) => setDesiredCount(e.value ?? 0)}
          showButtons
        />
      </InputWrapper>
      <InputWrapper
        label="Undesired Cards drawn"
        description="Number of undesired cards you have drawn (include starting hand)"
      >
        <InputNumber
          className="w-full"
          inputClassName="w-full"
          name="n"
          value={unDesiredDrawn}
          onValueChange={(e) => setUndesiredCount(e.value ?? 0)}
          showButtons
        />
      </InputWrapper>
      {calculate && (
        <>
          <Chart type="bar" data={data} options={option} />
          <p>
            Having drawn {desiredDrawn} desired cards ({successInDeck - desiredDrawn} remaining in
            deck), you&apos;ll most likely miss after {probabilityData.length - 1} more draw(s)
          </p>
        </>
      )}
    </div>
  );
};
