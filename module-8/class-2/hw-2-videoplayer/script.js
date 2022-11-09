const iframe = document.querySelector("iframe#vimeo-player");
const player = new Vimeo.Player(iframe);

player.on("play", () => {
  console.log("played the video!");
});

player.getVideoTitle().then((title) => {
  console.log("title:", title);
});



const savePlayerTime = ({
  duration,
  percent,
  seconds,
}) => {
  console.log(seconds)
  localStorage.setItem("videoplayer-current-time", seconds);
};

player.on("timeupdate", _.throttle(savePlayerTime, 1000));



const getLocalLastPlayedTime = () => {
  const defaultTime = 0;
  try {
    const locallySavedTime = localStorage.getItem("videoplayer-current-time");
    if (!locallySavedTime) return defaultTime;

    const parsedTime = JSON.parse(locallySavedTime);
    return Number(parsedTime);
  } catch (error) {
    console.log({ error });
    return defaultTime;
  }
};

const resumePlayerOnLastPlayed = () => {
  const lastPlayedTime = getLocalLastPlayedTime();
  player.setCurrentTime(lastPlayedTime);
  // player.play();
};

resumePlayerOnLastPlayed();
