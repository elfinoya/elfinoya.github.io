new Clappr.Player({
  source: "https://node1.olelive.com:6443/live/CCTV5HD/hls.m3u8",
  mute: false,
  autoPlay: true,
  parent: '#player-container',
  width: '100%',
  height: '100%',
  hlsjsConfig: {
    // here any hls.js configuration options
  } });