import { Chart } from "primereact/chart";
import { useAppContext } from "@/app/context/AppContext";
import { hypergeometric } from "@utils/hypergeometric/hypergeometric";
import { percentage } from "@utils/percentage/percentage";
import { round } from "@utils/round/round";
import { rangeText } from "@/app/utils/rangeText/rangeText";

export const OpeningHandStat: React.FC = () => {
  const { deckSize, cardsDrawn, successInDeck, successMin, successMax, calculate, setOpeningHandChance } = useAppContext();

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
  if (calculate) {
    for (let i = 0; i <= cardsDrawn; i++) {
      const probability = hypergeometric(deckSize, cardsDrawn, successInDeck, i);
      data.labels.push(`${i} cards`);
      data.datasets[0].data.push(round(probability * 100, 1));
      if (i >= successMin && i <= successMax) totalProbability += probability;
    }
  }

  setOpeningHandChance(totalProbability);

  return (
    calculate && (
      <div>
        <p>
          Chance to draw {rangeText(successMin, successMax)} of the desired cards: {percentage(totalProbability)}
        </p>
        <p>Chance to draw 0 of the desired cards: {percentage(hypergeometric(deckSize, cardsDrawn, successInDeck, 0))}</p>
        <Chart type="bar" data={data} options={option} />
      </div>
    )
  );
};
