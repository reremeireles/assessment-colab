import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { Container, ContentTitle } from "./styles";
import { User } from "../User";
import { getUsers } from "../../services/getUsers";
import { FilterUserByGender } from "../FilterbyGender";
import { LoadMoreButton } from "../LoadMoreButton";

export function ListUsers() {
  const { users, setUsers, genderFilter } = useContext(UserContext);

const loadMoreUsers = async () => {
    const newUsers = await getUsers({
      limit: 5,
      gender: genderFilter
    });
    setUsers([...users, ...newUsers]);
  };

  return (
    <Container>
      <ContentTitle>
        <h1>Team Members</h1>
      </ContentTitle>

      <FilterUserByGender />

      <ul>
        <li>
          {users.map((user, index) => {
            return <User id={index} key={index} />
          })}
        </li>
      </ul>
      <LoadMoreButton onClick={loadMoreUsers} />
    </Container>
  );
};
