import {useEffect, useState} from "react";
import {useAppContext} from "@/hooks/useAppContext";
import {hsbToHsl, hypergeometricComprehensive, percentage, round, normalize} from "@utils";
import {IntensityCell, Table} from "./OpeningHandStat.styled";

export const OpeningHandStat: React.FC = () => {
  const [result, setResult] = useState<ReturnType<typeof hypergeometricComprehensive>>();
  const {deckSize, handSize, cardGroups, calculate, setCalculate} = useAppContext();

  useEffect(() => {
    if (calculate) {
      setResult(hypergeometricComprehensive(deckSize, handSize, cardGroups));
      setCalculate(false);
    }
  }, [calculate]);

  let totalProbability = 0;

  const averageMulliganCount = round(1 / totalProbability, 0);

  if (!result) return null;

  return (
    <>
      {cardGroups.length > 2 ? (
        <>
          Pick 1-2 card groups
          <div className="flex flex-row">
            {cardGroups.map((cardGroup) => (
              <div
                key={cardGroup.id}
                className="border-round-md border-1 border-solid border-bluegray-800"
                style={{background: hsbToHsl(cardGroup.color), width: "2.5rem", height: "2.5rem"}}
              />
            ))}
          </div>
        </>
      ) : null}
      <Table>
        <tbody>
          <tr>
            <td></td>
            {result.table[0].map((_, index) => (
              <td key={index} style={{background: hsbToHsl(cardGroups[1].color)}}>
                {index}
              </td>
            ))}
          </tr>
          {result.table.map((row, index) => (
            <tr key={index}>
              <td style={{background: hsbToHsl(cardGroups[0].color)}}>{index}</td>
              {row.map((cellValue, cellIndex) => {
                return (
                  <IntensityCell
                    key={cellIndex}
                    $intensity={normalize(cellValue, result?.sortedFlatArray?.[0].probability)}
                    onClick={() => {}}
                  >
                    <div>{cellValue ? percentage(cellValue) : ""}</div>
                  </IntensityCell>
                );
              })}
            </tr>
          ))}
        </tbody>
      </Table>
      <div>1st: {percentage(result.sortedFlatArray[0].probability)}</div>
      <div>2nd: {percentage(result.sortedFlatArray[1].probability)}</div>
      <div>3rd: {percentage(result.sortedFlatArray[2].probability)}</div>
      <div>
        {percentage(
          result.sortedFlatArray[0].probability +
            result.sortedFlatArray[1].probability +
            result.sortedFlatArray[2].probability,
        )}
      </div>
    </>
  );
};
