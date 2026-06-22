import axios from 'axios';

const apiKey = "F8oqZLKt7K5L0suOWY9OUcs03gg7EIaJ";

const giphyApi = axios.create({
    baseURL: "https://api.giphy.com/v1/gifs",
    params: {
        api_key: apiKey
    }
});

giphyApi.get("/random")
    .then( resp => console.log(resp.data.data.images.downsized_large.url))
    .catch( err => console.error(err));
