import config from "../../config.json";
import styled from "styled-components";


import { Menu } from "../components/Menu/index.jsx";
import { TimeLine } from "../components/Timeline";
import { Header } from "../components/Header";
import { Favorites } from "../components/Favorites";
import { useState } from "react";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

function HomePage() {
  const [searchValue, setSerachValue] = useState('');

  return(
    <>
      <StyledHome>
        <Header name={config.name} job={config.job} avatar={config.avatar} bgImg={config.bannerImg}/>
        <Menu searchValue={searchValue} setSerachValue={setSerachValue}/>
        <TimeLine
          searchValue={searchValue}
          playlists={config.playlists} 
        />
        <Favorites 
          favorites={config.favorites} 
        />
      </StyledHome>
    </>
  );
}

export default HomePage;
