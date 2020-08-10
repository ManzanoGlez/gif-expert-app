export const getGifs = async (category) => {
  const api_key = "WT2TzL7itLgNJv5qUSju8PWqOgcyhXrz";
  const limit = "10";
  const search = category;

  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&limit=${limit}&api_key=${api_key}`;

  const resp = await fetch(url);
  const { data } = await resp.json();

   const gifs = data.map((img) => {

    const info = img.title.split(" by ");
    const title = info[0].replace("GIF", "");
    const autor = info[1];

    return {
      id: img.id,
      title,
      autor,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
