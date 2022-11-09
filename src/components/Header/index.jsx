import { StyledBanner, StyledHeader } from "./style";

export function Header(props) {
  return (
    <StyledHeader>
      <StyledBanner bgImg={props.bgImg} />
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
