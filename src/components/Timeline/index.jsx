import { StyledTimeline } from "./style";

export function TimeLine({searchValue, ...props}) {
  const playListNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playListNames.map((playListName) => {
        const videos = props.playlists[playListName];
        return (
          <section key={playListName}>
            <h2>{playListName}</h2>
            <div>
              {videos.filter((video) => {
                const titleNormalized = video.title.toLowerCase();
                const searchValueNormalized = searchValue.toLowerCase();
                return titleNormalized.includes(searchValueNormalized)
              }).map((video) => {
                return (
                  <a key={video.url} href={video.url}>
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
