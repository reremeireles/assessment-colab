import styled from "styled-components";

export const ContentSelect = styled.div`
  margin: 0 1rem 1rem 1rem;

  select {
    padding: 0.5rem;
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border: none;
    background: var(--grey-800);
    color: var(--grey-400);

    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;

    &:focus {
      border: 1px solid var(--pink-500);
      background: var(--grey-900);
    }
  }

  option {
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    color: var(--grey-100);
  }
`;
