import { useContext, useEffect } from "react";
import { getUsers } from "../../services/getUsers";
import { UserContext } from "../../context/UserContext";
import { ContentSelect } from "./styles";

export function FilterUserByGender() {
  const {setUsers, genderFilter, setGenderFilter} = useContext(UserContext);

  useEffect(() => {
    getUsers({
      gender: genderFilter,
    }).then(users => setUsers(users));
  }, [genderFilter, setUsers]);

  return (
      <ContentSelect>
        <select
          name="gender"
          id="gender"
          onChange={(event) => setGenderFilter(event.target.value as 'male' | 'female' | undefined)}
        >
          <option value="" hidden>Select by gender</option>
          <option value={undefined}>All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </ContentSelect>
  );
};
