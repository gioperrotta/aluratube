import { StyledTimeline } from "./style";

export function TimeLine(props) {
  const playListNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playListNames.map((playListName) => {
        const videos = props.playlists[playListName];
        return (
          <section>
            <h2>{playListName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a key={video.title} href={video.url}>
                    <img src={video.thumb} alt="" />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
