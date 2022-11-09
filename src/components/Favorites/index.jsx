import { StyledFavorite } from "./style";

export function Favorites(props) {
  const favorites = props.favorites;
  return (
    <StyledFavorite>
      {favorites.map((favorite) => {
        return (
          <a key={favorite.url} href={favorite.url}>
            <img src={favorite.avatar} alt="" />
            <h3>{favorite.name}</h3>
          </a>
        );
      })}
    </StyledFavorite>
  );
}
