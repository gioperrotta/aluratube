import { StyledMenu } from "./style";
import { Logo } from "./Logo";
import { Search } from "./Search";

export function Menu({searchValue, setSerachValue}) {
  return (
    <StyledMenu>
      <div>
        <Logo />
       
      </div>
      <Search searchValue={searchValue} setSerachValue={setSerachValue}/>
    </StyledMenu>
  );
}
