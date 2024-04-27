import { RadioButton } from "primereact/radiobutton";
import { useState } from "react";
import { useAppContext } from "@/app/context/AppContext";
import { round } from "@/app/utils/round/round";
import { rangeText } from "@/app/utils/rangeText/rangeText";

export const Mulligan: React.FC = () => {
  const { openingHandChance, cardsDrawn, successMin, successMax } = useAppContext();
  const averageMulliganCount = round(1 / openingHandChance, 0);
  return (
    <div className="flex flex-wrap gap-3">
      It will take {averageMulliganCount} mulligans on average to draw a hand of {cardsDrawn} containing{" "}
      {rangeText(successMin, successMax)} of the desired cards
    </div>
  );
};
