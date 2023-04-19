import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Container } from "./styles";
import { UserResponse } from "../../services/getUsers";
import { Modal } from "../Modal";

interface UserProps {
  id: number;
};

export function User({id}: UserProps) {
  const { users } = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useState(false);
  const user: UserResponse = users[id];

  const handleSelectUser = (user: any) => {
    setSelectedUser(user);
  };

  return (
    <>
      <Container>
        <div className="profile">
          <img
            src={user.picture.thumbnail}
            alt="User"
            className="img"
          />
          <p className="name">{`${user.name.first} ${user.name.last}`}</p>
          <span className="username">@{user.login.username}</span>
        </div>

        <div className="info">
          <div className="location">
            <p>{user.location.country}</p>
            <span>Country</span>
          </div>
          <div className="gender">
            <p>{user.gender}</p>
            <span>Gender</span>
          </div>
          <div className="date">
            <p>
              {new Intl.DateTimeFormat('pt-BR').format(
                new Date(user.registered.date)
              )}
            </p>
            <span>Member since</span>
          </div>
        </div>

        <div className="button">
          <button onClick={() => handleSelectUser(user)}>More info</button>
        </div>
      </Container>
      {selectedUser && (
      <Modal id={id} onClose={() => setSelectedUser(!selectedUser)} />
    )}
  </>
  );
};
