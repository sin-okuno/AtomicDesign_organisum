import "./styles.css";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnlyLayout } from "./components/template/HeaderOnlyLayout";
import { DefaultLayout } from "./components/template/DefaultLayout";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  const user = {
    name: "奥野 伸一",
    image: "https://source.unsplash.com/Sg3XwuEpybU",
    position: "センター",
    height: "180",
    weight: "80"
  };
  return (
    <BrowserRouter>
      <DefaultLayout>
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
