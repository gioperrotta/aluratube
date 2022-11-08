import { StyledHeader } from "./style"
//import Banner from '../../../public/Banner.png'

export function Header(props) {
  return (
    <StyledHeader>
      <img src="/Banner.png" alt="banner" />
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
