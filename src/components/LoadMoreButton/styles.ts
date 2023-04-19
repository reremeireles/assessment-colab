import styled from "styled-components";

export const LoadButton = styled.div`
  /* outline: 1px solid red; */
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;

  button {
    margin: 1rem;
    width: 25%;
    height: 70%;
    border: 1px solid var(--pink-500);
    border-radius: 4px;
    padding: 0.5rem;
    background: var(--grey-900);
    font-size: 0.85rem;
    font-weight: bold;
    color: var(--pink-500);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media screen and (max-width: 760px) {
    display: grid;
    justify-items: center;
    align-items: center;

    button {
      width: 50%;
      height: 50%;
    }
  }
`;
