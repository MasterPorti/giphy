import "../scss/title.scss";
export default function Title({ icon, text }) {
  return (
    <div className="subtitle">
      <img src={icon} />
      <h2>{text}</h2>
    </div>
  );
}
