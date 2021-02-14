const fingerJoints = {
  thumb: [0, 1, 2, 3, 4],
  indexFinger: [0, 5, 6, 7, 8],
  middleFinger: [0, 9, 10, 11, 12],
  ringFinger: [0, 13, 14, 15, 16],
  pinky: [0, 17, 18, 19, 20],
};

const left_hand_style = {
  0: { color: "#00E676", size: 15 },
  1: { color: "white", size: 6 },
  2: { color: "#F44336", size: 10 },
  3: { color: "white", size: 6 },
  4: { color: "white", size: 6 },
  5: { color: "#6A7FDB", size: 10 },
  6: { color: "white", size: 6 },
  7: { color: "white", size: 6 },
  8: { color: "white", size: 6 },
  9: { color: "#FF729F", size: 10 },
  10: { color: "white", size: 6 },
  11: { color: "white", size: 6 },
  12: { color: "white", size: 6 },
  13: { color: "#F2CD5D", size: 10 },
  14: { color: "white", size: 6 },
  15: { color: "white", size: 6 },
  16: { color: "white", size: 6 },
  17: { color: "#D3C4D1", size: 10 },
  18: { color: "white", size: 6 },
  19: { color: "white", size: 6 },
  20: { color: "white", size: 6 },
};

const right_hand_style = {
  0: { color: "#00E676", size: 15 },
  1: { color: "white", size: 6 },
  2: { color: "#F44336", size: 10 },
  3: { color: "white", size: 6 },
  4: { color: "white", size: 6 },
  5: { color: "#6A7FDB", size: 10 },
  6: { color: "white", size: 6 },
  7: { color: "white", size: 6 },
  8: { color: "white", size: 6 },
  9: { color: "#FF729F", size: 10 },
  10: { color: "white", size: 6 },
  11: { color: "white", size: 6 },
  12: { color: "white", size: 6 },
  13: { color: "#F2CD5D", size: 10 },
  14: { color: "white", size: 6 },
  15: { color: "white", size: 6 },
  16: { color: "white", size: 6 },
  17: { color: "#D3C4D1", size: 10 },
  18: { color: "white", size: 6 },
  19: { color: "white", size: 6 },
  20: { color: "white", size: 6 },
};

const words_both = {
  WeatherLeft: {
    WeatherRight: {
      message: "weather",
      display: true,
    },
  },
  HelloLeft: {
    HelloRight: {
      message: "Hello!",
      display: true,
    },
  },
  // I: {
  //   thumbs_up: {
  //     message: "Help!",
  //     display: true,
  //   },
  // },
};

const words_left = {
  WeatherLeft: {
    message: "weather",
    display: true,
  },
  HelloLeft: {
    message: "hello",
    display: true,
  },
  Hello: {
    message: "hello",
    display: true,
  },
  HelloRight: {
    message: "hello",
    display: true,
  },
  thumbs_up: {
    message: "like",
    display: true,
  },
  I: {
    message: "I",
    display: true,
  },
  you: {
    message: "you",
    display: true,
  }
};

const words_right = {
  WeatherRight: {
    message: "weather",
    display: true,
  },
  HelloRight: {
    message: "HelloRight",
    display: true,
  },
  Hello: {
    message: "hello",
    display: true,
  },
  HelloRight: {
    message: "hello",
    display: true,
  },
  thumbs_up: {
    message: "like",
    display: true,
  },
  I: {
    message: "I",
    display: true,
  },
  you: {
    message: "you",
    display: true,
  }
};

const dynamic_words = {
  How1: {
    How2: {
      message: "How",
      display: true,
    },
    thumbs_up: {
      message: "How",
      display: true,
    }
  }
}
