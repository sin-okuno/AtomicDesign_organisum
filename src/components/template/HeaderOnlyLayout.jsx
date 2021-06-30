import { Header } from "../molecules/layout/Header";

export const HeaderOnlyLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <div></div>
      {children}
    </>
  );
};
