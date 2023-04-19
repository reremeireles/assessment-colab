import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { UserResponse } from "../../services/getUsers";
import { X } from "@phosphor-icons/react";
import { BackgroundModal, ContainerModal, ContentModal } from "./styles";

interface UserProps {
  id: number;
  onClose: () => void;
};

export function Modal({ onClose, id }: UserProps) {
  const { users } = useContext(UserContext);
  const user: UserResponse = users[id];

  return (
    <BackgroundModal>
      <ContainerModal>
        <ContentModal>
          <div className="icon">
            <X size={32} onClick={onClose} id="close"/>
          </div>
          <div className="title">
            <h1>Member Details</h1>
          </div>
          <div className="profile">
            <img src={user.picture.medium} alt="User" className="picture" />
            <p className="user">
              {`${user.name.first} ${user.name.last}, ${user.dob.age}`}
            </p>
            <p className="location">
              {`${user.location.city}, ${user.location.state}, ${user.location.country}`}
            </p>
          </div>
          <div className="content">
            <div className="subtitle">
              <p>ID</p>
              <p>Birth date</p>
              <p>Phone</p>
              <p>Adress</p>
              <p>Email</p>
            </div>
            <div className="info">
              <p>{user.login.salt}</p>
              <p>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(user.dob.date)
                )}
              </p>
              <p>{user.phone}</p>
              <p>
                {`${user.location.street.name}, ${user.location.street.number}`}
              </p>
              <p>{user.email}</p>
            </div>
          </div>
        </ContentModal>
      </ContainerModal>
    </BackgroundModal>
  )
};
