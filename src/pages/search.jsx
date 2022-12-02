import { useParams } from "react-router-dom";

export default function () {
  const { keyword } = useParams();
  return <div>{keyword}</div>;
}
