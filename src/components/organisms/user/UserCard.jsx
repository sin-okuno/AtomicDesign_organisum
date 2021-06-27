import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <Sdl>
        <dt>ポジション</dt>
        <dd>{user.position}</dd>
        <dt>身長</dt>
        <dd>{user.height}</dd>
        <dt>体重</dt>
        <dd>{user.weight}kg</dd>
      </Sdl>
    </Card>
  );
};

const Sdl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 50px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
