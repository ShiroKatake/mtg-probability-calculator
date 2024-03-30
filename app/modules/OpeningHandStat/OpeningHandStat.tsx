import { useAppContext } from "@/app/context/AppContext";
import { hypergeometric } from "@/app/utils/hypergeometric/hypergeometric";
import { percentage } from "@/app/utils/percentage/percentage";

interface Props {
  children?: React.ReactNode;
}

export const OpeningHandStat: React.FC<Props> = ({ children }) => {
  const { deckSize, cardsDrawn, successInDeck, successInHand, calculate } = useAppContext();

  const pExact = percentage(hypergeometric(deckSize, cardsDrawn, successInDeck, successInHand));

  return calculate && <div>{pExact}</div>;
};
