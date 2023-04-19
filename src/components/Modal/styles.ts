import styled from "styled-components";

export const BackgroundModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.7);

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerModal = styled.div`
  width: 600px;
  height: 400px;
  background-color: var(--grey-800);
  border-radius: 6px;
  padding: 1rem;

  @media screen and (max-width: 760px) {
    margin: 1rem;
  }
`;

export const ContentModal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "title icon"
    "profile profile"
    "content content"
    "button button"
  ;

  .icon {
    grid-area: icon;
    color: var(--grey-400);
    text-align: right;

    #close {}
    cursor: pointer;
  }

  .title {
    grid-area: title;
    margin: 0.5rem 0;
    color: var(--grey-200);
  }

  .profile {
    grid-area: profile;
    margin: 0.5rem 0;
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-template-areas:
      "picture user"
      "picture location"
    ;

    .picture {
      grid-area: picture;
      border-radius: 6rem;
    }

    .user {
      grid-area: user;
      padding: 0.5rem 0 0 0.5rem;
      font-size: 0.875rem;
      color: var(--grey-400);
    }
  }

  .content {
    grid-area: content;
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "subtitle info"
    ;

    .subtitle {
      grid-area: subtitle;
      color: var(--grey-400);

      p {
        padding: 0.5rem;
      }
    }

    .info {
      grid-area: info;
      color: var(--grey-200);

      p {
        text-align: right;
        padding: 0.5rem;
      }
    }
  }
`;
