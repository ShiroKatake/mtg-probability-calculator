import {CardGroup} from "@/app/hooks/useCardGroups";
import {combination} from "../combination/combination";
import {round} from "../round/round";
import {rootCertificates} from "tls";

/**
 * Calculates the probability of x successes in n draws from a population of size N,
 * using the Hypergeometric distribution.
 *
 * @param N Deck size
 * @param n Starting hand size
 * @param K Desired cards in deck
 * @param k Desired cards in starting hand
 * @returns The probability of x successes in n draws from a population of size N
 */

// export const hypergeometric = (N: number, n: number, K: number, k: number) => {
//   return combination(K, k) * combination(N - K, n - k) / combination(N, n);
// };

export const hypergeometric = (N: number, n: number, K: number, k: number) => {
  return (combination(K, k) * combination(N - K, n - k)) / combination(N, n);
};

export const hypergeometricDynamic = (
  deckSize: number,
  handSize: number,
  cardGroups: Pick<CardGroup, "desiredInDeck" | "desiredExpectedInHand">[],
) => {
  if (cardGroups.length === 0) return 0;

  const pToDrawDesiredPerGroup = cardGroups.map(({desiredInDeck, desiredExpectedInHand}) =>
    combination(desiredInDeck, desiredExpectedInHand),
  );
  const pToDrawAnyDesired = pToDrawDesiredPerGroup.reduce((acc, cur) => acc * cur);

  const totalDesiredInDeck = cardGroups.map(({desiredInDeck}) => desiredInDeck);
  const totalDesiredExpectedInHand = cardGroups.map(
    ({desiredExpectedInHand}) => desiredExpectedInHand,
  );
  const pToDrawAnyUndesired = combination(
    deckSize - totalDesiredInDeck.reduce((acc, cur) => acc + cur, 0),
    handSize - totalDesiredExpectedInHand.reduce((acc, cur) => acc + cur, 0),
  );

  const pToDrawAnyCard = combination(deckSize, handSize);

  return (pToDrawAnyDesired * pToDrawAnyUndesired) / pToDrawAnyCard;
};

type Result = {
  i: number;
  j: number;
  probability: number;
};

export const hypergeometricComprehensive = (
  deckSize: number,
  handSize: number,
  cardGroups: Pick<CardGroup, "desiredInDeck">[],
) => {
  if (cardGroups.length !== 2) {
    return {
      table: [],
      sortedFlatArray: [],
    };
  }

  const resultTable: number[][] = [];

  const iMax = Math.min(handSize, cardGroups[0].desiredInDeck);
  const jMax = Math.min(handSize, cardGroups[1].desiredInDeck);

  for (let i = 0; i <= iMax; i++) {
    resultTable.push(new Array(jMax + 1).fill(""));
  }

  const resultFlattened: Result[] = [];

  for (let i = 0; i <= iMax; i++) {
    for (let j = 0; j <= Math.min(handSize - i, cardGroups[1].desiredInDeck); j++) {
      const probability =
        (combination(cardGroups[0].desiredInDeck, i) *
          combination(cardGroups[1].desiredInDeck, j) *
          combination(
            deckSize - cardGroups[0].desiredInDeck - cardGroups[1].desiredInDeck,
            handSize - i - j,
          )) /
        combination(deckSize, handSize);
      resultTable[i][j] = probability;
      resultFlattened.push({i, j, probability});
    }
  }

  return {
    table: resultTable,
    sortedFlatArray: resultFlattened.toSorted((a, b) => b.probability - a.probability),
  };
};

export const hypergeometricKOrMore = (
  N: number,
  n: number,
  K: number,
  k: number,
  callback?: (probability: number, index: number) => void,
) => {
  let probability = 0;
  for (let i = 0; i < k; i++) {
    probability += hypergeometric(N, n, K, i);
    callback?.(probability, i);
  }
  probability = 1 - probability;
  return probability;
};

export const hypergeometricKOrLess = (N: number, n: number, K: number, k: number) => {
  let probability = 0;
  for (let i = 0; i <= k; i++) {
    probability += hypergeometric(N, n, K, i);
  }
  return probability;
};

export const dropMiss = (N: number, n: number, K: number, x: number) => {
  let probability = 1;
  let draw = 0;
  const probabilityData = [];
  while (probability >= 0.5) {
    draw++;
    probability = hypergeometricKOrMore(N, n + draw, K, draw);
    if (draw >= x) {
      probabilityData.push(round(probability * 100, 2));
    }
  }
  return probabilityData;
};
