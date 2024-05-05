// we need to import shaka ui module instead of the regular module to gain access to the Overlay constructor
import shaka from "shaka-player/dist/shaka-player.ui.js";

const manifestUri =
  "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd";

async function init() {
  const video = document.getElementById("video");
  const container = document.getElementById("container");
  const player = new shaka.Player(video);

  // initialize the UI instance onto the HTML element we created
  const ui = new shaka.ui.Overlay(player, container, video);

  const controls = ui.getControls();
  // Listen for error events for possible error handling.
  player.addEventListener("error", console.error);
  controls.addEventListener("error", console.error);

  const adManager = player.getAdManager();
  const adContainer = video.ui.getControls().getClientSideAdContainer();
  console.log(adContainer);
  adManager.initClientSide(adContainer, video);

  try {
    await player.load(manifestUri);
  } catch (e) {
    console.error(e);
  }
}

// Listen to the custom shaka-ui-loaded event, to wait until the UI is loaded.
document.addEventListener("shaka-ui-loaded", init);
