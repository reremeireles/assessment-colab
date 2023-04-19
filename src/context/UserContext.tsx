import { createContext, useState } from "react";
import { GenderType, UserResponse } from "../services/getUsers";

interface UserContextProps {
  users: UserResponse[];
  setUsers: React.Dispatch<React.SetStateAction<UserResponse[]>>;
  genderFilter: GenderType;
  setGenderFilter: React.Dispatch<React.SetStateAction<GenderType>>;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserProvider = ({ children }: any) => {
  const [users, setUsers] = useState<UserResponse[]>([]);
  const [genderFilter, setGenderFilter] = useState<GenderType>(undefined);

  return (
    <UserContext.Provider
      value={{ users, setUsers, genderFilter, setGenderFilter }}>
      {children}
    </UserContext.Provider>
  );
};
