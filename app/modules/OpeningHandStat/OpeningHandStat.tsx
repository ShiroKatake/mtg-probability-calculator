import { useAppContext } from "@/app/context/AppContext";
import { hypergeometric } from "@/app/utils/hypergeometric/hypergeometric";

interface Props {
  children?: React.ReactNode;
}

export const OpeningHandStat: React.FC<Props> = ({ children }) => {
  const { N, n, k, x } = useAppContext();

  console.log(hypergeometric(N, n, k, x));

  return <div>{children}</div>;
};
