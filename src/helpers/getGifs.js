export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=YFVtBzT7o1e5Wrr1BnKan9pdTugv6FDW`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        };
    })

    return gifs;
};