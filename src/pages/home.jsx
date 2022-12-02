import Search from "../components/search";
import Banner from "../components/banner";
import Title from "../components/title";
import Carousel from "../components/carousel";

import trendingIcon from "../img/trendingIcon.svg";
import thunderbolt from "../img/thunderbolt.svg";

const BannerURL =
  "https://media.giphy.com/headers/2022-11-28-42-1669657336/4U6lfogs.gif";

export default function Home() {
  return (
    <div className="Home">
      <Search />
      <Banner active={true} bannerURL={BannerURL} />
      <Title icon={trendingIcon} text="Trending" />
      <Carousel />
      <Title icon={thunderbolt} text="Artist" />
    </div>
  );
}
