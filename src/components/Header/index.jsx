import { StyledHeader } from "./style"

export function Header(props) {
  return (
    <StyledHeader>
      {/* {<img src="banner" alt="banner" />} */}
      <section className="user-info">
        <img src={`https://github.com/${props.avatar}`} alt="avatar" />
        <div>
          <h2>{props.name}</h2>
          <p>{props.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}
