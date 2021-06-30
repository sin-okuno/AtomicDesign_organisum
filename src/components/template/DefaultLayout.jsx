import { Fotter } from "../molecules/layout/Fotter";
import { Header } from "../molecules/layout/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Fotter />
    </>
  );
};
