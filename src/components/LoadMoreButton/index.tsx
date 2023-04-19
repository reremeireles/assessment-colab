import { LoadButton } from "./styles";

export function LoadMoreButton({ onClick }: any) {
  return (
    <LoadButton>
      <button onClick={onClick}>
        Load more users
      </button>
    </LoadButton>
  );
}
