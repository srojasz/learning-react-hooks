export default function fetchGifs(keyword) {
    const apiKey = "oHaXvTbitKxXjIh3JxwJLoNZ4tYRsXCb";
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

    return fetch(apiUrl)
      .then(response => response.json())
      .then(responseData => {
        const {data} = responseData;
        const gifs = data.map((image) => image.images.original.url);
        return gifs;
    })
}