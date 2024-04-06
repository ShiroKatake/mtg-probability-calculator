import { Chart } from "primereact/chart";
import { useAppContext } from "@/app/context/AppContext";
import { hypergeometric, hypergeometricKOrMore } from "@utils/hypergeometric/hypergeometric";
import { percentage } from "@utils/percentage/percentage";
import { round } from "@utils/round/round";

export const OpeningHandStat: React.FC = () => {
  const { deckSize, cardsDrawn, successInDeck, successInHand, calculate } = useAppContext();

  const data: any = {
    labels: [],
    datasets: [
      {
        label: "Probability",
        data: [],
        borderWidth: 1,
      },
    ],
  };

  const option = {
    plugins: {
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

  for (let i = 0; i <= cardsDrawn; i++) {
    const probability = hypergeometric(deckSize, cardsDrawn, successInDeck, i);
    if (probability < 0.001) break;
    data.labels.push(`${i} cards`);
    data.datasets[0].data.push(round(probability * 100, 1));
  }

  return (
    calculate && (
      <div>
        <p>
          Chance to draw {successInHand} or more of the wanted cards:{" "}
          {percentage(hypergeometricKOrMore(deckSize, cardsDrawn, successInDeck, successInHand))}
        </p>
        <p>
          Chance to draw exactly {successInHand} of the wanted cards:{" "}
          {percentage(hypergeometric(deckSize, cardsDrawn, successInDeck, successInHand))}
        </p>
        <p>Chance to draw 0 of the wanted cards: {percentage(hypergeometric(deckSize, cardsDrawn, successInDeck, 0))}</p>

        <Chart type="bar" data={data} options={option} />
      </div>
    )
  );
};
