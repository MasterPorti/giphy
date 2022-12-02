import "../scss/search.scss";
import serchIcon from "../img/searchIcon.png";

export default function Search() {
  return (
    <section className="searchContainer">
      <input
        style={{
          backgroundImage: `url(${serchIcon})`,
        }}
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        placeholder="Search all the GIF'S and Stickers"
        id="input"
      />
    </section>
  );
}
