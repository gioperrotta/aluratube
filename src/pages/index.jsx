import config from "../../config.json";
import styled from "styled-components";

import { CSSReset } from "../components/CSSReset";
import { Menu } from "../components/Menu/index.jsx";
import { TimeLine } from "../components/Timeline";
import { Header } from "../components/Header";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

function HomePage() {
  return (
    <>
      <CSSReset />
      <StyledHome>
        <Header name={config.name} job={config.job} avatar={config.avatar} />
        <Menu />
        <TimeLine playlists={config.playlists} />
      </StyledHome>
    </>
  );
}

export default HomePage;
