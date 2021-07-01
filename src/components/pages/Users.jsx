import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

export const Users = () => {
  const users = [...Array(10).keys()].map((val) => {
    return {
      id: val,
      name: `奥野 伸一${val}`,
      image: "https://source.unsplash.com/Sg3XwuEpybU",
      position: "センター",
      height: "180",
      weight: "80"
    };
  });
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUsersArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUsersArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const SUsersArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
