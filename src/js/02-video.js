import Player from "@vimeo/player";
import _ from "lodash";

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
    url: 'https://player.vimeo.com/video/236203659',
    
});

player.on('play', function () {
    player.on('timeupdate', _.throttle(function ({seconds}) {
        localStorage.setItem('videoplayer-current-time', seconds);
    }, 1000));
});

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
