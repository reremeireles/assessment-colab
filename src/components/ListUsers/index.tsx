import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { Container, ContentTitle } from "./styles";
import { User } from "../User";
import { getUsers } from "../../services/getUsers";

export function ListUsers() {
  const { users, setUsers } = useContext(UserContext);

   useEffect(() => {
    getUsers({
    }).then(users => setUsers(users));
  }, []);

  return (
    <Container>
      <ContentTitle>
        <h1>Team Members</h1>
      </ContentTitle>

      <ul>
        <li>
          {users.map((user, index) => {
            return <User id={index} key={index} />
          })}
        </li>
      </ul>
    </Container>
  );
};
