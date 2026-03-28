import {EditText} from "react-edit-text";
import {confirmDialog} from "primereact/confirmdialog";
import {ColorPicker} from "primereact/colorpicker";
import {InputNumber} from "primereact/inputnumber";
import {useAppContext} from "@/hooks/useAppContext";
import {CardGroup, ModifiableCardGroupProps} from "@/hooks/useCardGroups";
import {InputWrapper} from "../Input/Input";
import {Button} from "../Button/Button";
import {StyledButtonsContainer, StyledFieldset} from "./CardGroup.styled";

export const CardGroups: React.FC = () => {
  const {cardGroups, editGroupData: setGroup, addGroup, removeGroup} = useAppContext();

  return (
    <div className="flex flex-column gap-3 pt-3 pb-3">
      {cardGroups.map((cardGroup) => (
        <Group
          key={cardGroup.id}
          cardGroup={cardGroup}
          setGroup={setGroup}
          removeGroup={removeGroup}
        />
      ))}
      <Button label="Add new group" icon="pi pi-plus" onClick={() => addGroup()} />
    </div>
  );
};

interface GroupProps {
  cardGroup: CardGroup;
  setGroup: (id: string, key: keyof ModifiableCardGroupProps, value: any) => void;
  removeGroup: (id: string) => void;
}

const Group: React.FC<GroupProps> = ({cardGroup, setGroup, removeGroup}) => {
  const {toastRef} = useAppContext();

  const handleRemoveGroup = () => {
    removeGroup(cardGroup.id);
    toastRef.current?.show({
      severity: "info",
      detail: "Card group deleted",
      life: 3000,
    });
  };

  return (
    <StyledFieldset
      $color={cardGroup.color}
      $characterCount={cardGroup.name.length}
      className="p-2 m-0"
      legend={
        <EditText
          inputClassName="editInput"
          name="name"
          value={cardGroup.name}
          onChange={(e) => setGroup(cardGroup.id, "name", e.target.value)}
          placeholder="Unnamed group"
        />
      }
    >
      <StyledButtonsContainer>
        <ColorPicker
          format="hsb"
          value={cardGroup.color}
          onChange={(e) => setGroup(cardGroup.id, "color", e.value)}
        />
        <Button
          icon="pi pi-trash"
          severity="danger"
          aria-label="Delete group"
          onClick={() => {
            confirmDialog({
              header: "Delete this group?",
              message: "This action can't be undone",
              icon: "pi pi-exclamation-triangle",
              defaultFocus: "reject",
              accept: handleRemoveGroup,
            });
          }}
        />
      </StyledButtonsContainer>
      <InputWrapper
        label="Number in Deck"
        description={
          <span>
            Number of <strong>{cardGroup.name}</strong> cards in the deck
          </span>
        }
      >
        <InputNumber
          className="w-full"
          inputClassName="w-full"
          name="K"
          value={cardGroup.desiredInDeck}
          onValueChange={(e) => setGroup(cardGroup.id, "desiredInDeck", e.value)}
          showButtons
        />
      </InputWrapper>
    </StyledFieldset>
  );
};
