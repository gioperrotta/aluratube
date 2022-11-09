import { StyledSearch } from "./style";

export function Search({searchValue, setSerachValue}) {

  return (
    <StyledSearch>
      <input 
        type="text" 
        onChange={(event) => {setSerachValue(event.target.value)}}
        value={searchValue}
      />
      <button>
        🔎
      </button>
    </StyledSearch>
  );
}
