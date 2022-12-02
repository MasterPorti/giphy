import "../scss/banner.scss";

export default function Banner({ active, bannerURL }) {
  return (
    <section className={`banner ${active ? "" : "hidden"}`}>
      <img className="gifBanner" src={bannerURL} />
    </section>
  );
}
