import "./styles.css";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

export default function App() {
  const user = {
    name: "奥野 伸一",
    image: "https://source.unsplash.com/Sg3XwuEpybU",
    position: "センター",
    height: "180",
    weight: "80"
  };
  return (
    <div className="App">
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
