const URL =
  "https://api.giphy.com/v1/gifs/trending?api_key=zBhkK5colzQjonYAbAP0SwOj1BAhmC3f&limit=25&rating=g";

export default async function getTrending() {
  const req = await fetch(URL);
  const data = await req.json();
  const imgs = data.data.map((imagen) => imagen.images.downsized_medium.url);
  return imgs;
}
