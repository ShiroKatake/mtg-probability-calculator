import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;

  td {
    border: 1px solid white;
  }
`;

export const IntensityCell = styled.td<{$intensity: number}>`
  text-align: center;
  --r: 3;
  --g: 72;
  --b: 29;

  background: rgba(
    calc(255 - ((255 - var(--r)) * ${({$intensity}) => $intensity})),
    calc(255 - ((255 - var(--g)) * ${({$intensity}) => $intensity})),
    calc(255 - ((255 - var(--b)) * ${({$intensity}) => $intensity})),
    ${({$intensity}) => $intensity}
  );

  &:hover div {
    border: 3px solid gold;
    margin: -3px;
    cursor: pointer;
    z-index: 5;
  }
`;
