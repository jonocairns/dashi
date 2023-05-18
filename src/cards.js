import plex from './assets/icons/plex.png';
import request from './assets/icons/overseerr.png';
import patreon from './assets/icons/patreon.png'

const cards = [
    {
        title: "Plex",
        url: `https://plex.${window.location.host}/web/index.html`,
        img: plex
    },
    {
        title: "Request",
        url: `https://request.${window.location.host}`,
        img: request
    },
    {
        title: "Donate",
        url: "https://www.patreon.com/jonosma",
        img: patreon
    }
];

export default cards;