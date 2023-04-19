import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Container } from "./styles";
import { UserResponse } from "../../services/getUsers";

interface UserProps {
  id: number;
};

export function User({id}: UserProps) {
  const { users } = useContext(UserContext);
  const user: UserResponse = users[id];

  return (
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
        <button onClick={() => {}}>More info</button>
      </div>
    </Container>
  );
};
