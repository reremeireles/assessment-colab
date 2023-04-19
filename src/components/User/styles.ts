import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid var(--grey-800);
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr 100px;
  grid-template-areas:
    "profile info button"
  ;

  p {
    color: var(--grey-200);
  }

  span {
    font-size: 0.75rem;
    color: var(--grey-400);
  }

  @media screen and (max-width: 1200px) {}

  @media screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: 100%;
    grid-template-areas:
      "profile"
      "info"
     " button"
    ;
  }

  .profile {
    grid-area: profile;
    align-items: center;
    justify-content: left;
    padding-bottom: 0.5rem;
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-template-areas:
      "img name"
      "img username"
    ;

    .img {
      grid-area: img;
      width: 60px;
      height: 60px;
      border-radius: 3rem;
    }

    .name {
      grid-area: name;
      font-size: 1.25rem;
      font-weight: bold;
    }

    .username {
      grid-area: username;
      font-size: 1rem;
      color: var(--grey-400);
    }
  }

  .info {
    grid-area: info;
    align-items: center;
    justify-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "location gender date"
    ;

    .location {
      grid-area: location;
      text-align: center;
    }

    .gender {
      grid-area: gender;
      text-align: center;

    }

    .date {
      grid-area: date;
      text-align: center;

    }
  }

   @media screen and (max-width: 760px) {
      .info {
        margin: 0.5rem 0;
      }
    }

  .button {
    grid-area: button;
    display: grid;
    align-items: center;

    button {
      width: 100%;
      height: 50%;
      border: 1px solid var(--grey-100);
      border-radius: 4px;
      padding: 0.5rem;
      background: var(--grey-900);
      font-size: 0.85rem;
      font-weight: bold;
      color: var(--grey-100);

      transition: filter 0.2s;

      &:hover {
        border: 1px solid var(--pink-500);
        color: var(--pink-500);
        filter: brightness(0.9);
      }
    }
  }

  @media screen and (max-width: 760px) {
    .button {
      margin: 0.5rem 0;
      display: grid;
      justify-items: center;
      align-items: center;

      button {
        width: 50%;
        height: 100%;
      }
    }
  }
`;
