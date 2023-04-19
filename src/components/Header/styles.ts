import styled from "styled-components";

export const Container = styled.header`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
export const ContentLogo = styled.div`
  margin: 1rem;

  #smiley {
    color: var(--grey-100);
  }
`;

export const ContentNav = styled.nav`
  margin: 0.5rem;

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  a {
    display: block;
    padding: 1rem;
    text-decoration: none;
    font-weight: bold;
    color: var(--grey-100);

    transition: filter 0.2s;

    &:hover {
      color: var(--pink-500);
      filter: brightness(0.9);
    }
  }
`;
