import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {getRandomHsb} from "../utils/hsbUtils/hsbUtils";
import {ColorPickerHSBType} from "primereact/colorpicker";

export type CardGroup = {
  id: string;
  color: ColorPickerHSBType;
  name: string;
  desiredInDeck: number;
  desiredExpectedInHand: number;
};

export type ModifiableCardGroupProps = Omit<CardGroup, "id">;

export const useCardGroups = () => {
  const [cardGroups, setCardGroups] = useState<CardGroup[]>([
    {
      id: uuidv4(),
      color: {h: 150, s: 51, b: 34},
      name: "Lands",
      desiredInDeck: 37,
      desiredExpectedInHand: 2,
    },
  ]);

  const addGroup = () => {
    setCardGroups([
      ...cardGroups,
      {
        id: uuidv4(),
        color: getRandomHsb(),
        name: `Unnamed Group ${cardGroups.length + 1}`,
        desiredInDeck: 0,
        desiredExpectedInHand: 0,
      },
    ]);
  };

  const removeGroup = (id: string) => {
    setCardGroups(cardGroups.filter((group) => group.id !== id));
  };

  const editGroupData = (id: string, key: keyof ModifiableCardGroupProps, value: any) => {
    setCardGroups(
      cardGroups.map((group) => {
        if (group.id === id) {
          return {...group, [key]: value};
        }
        return group;
      }),
    );
  };

  return {cardGroups, editGroupData, addGroup, removeGroup};
};
