const WIDTH = 1280;
HEIGHT = 720;

const outputCanvas = document.querySelector(".output_canvas");
outputCanvas.setAttribute("width", WIDTH);
outputCanvas.setAttribute("height", HEIGHT);
outputCanvas.style.width = WIDTH;
outputCanvas.style.height = HEIGHT;


function recognizeLeftHandGestures(identifiedGestures) {
  let current = words_left[identifiedGestures[0].name];
  if (current !== undefined) {
    return current["message"];
  }
  return null;
}

function recognizeRightHandGestures(identifiedGestures) {
  let current = words_right[identifiedGestures[1].name];
  if (current !== undefined) {
    return current["message"];
  }
  return null;
}

function recognizeBothHandGestures(identifiedGestures) {
  let current = words_both[identifiedGestures[0].name];
  if (current !== undefined) {
    current = current[identifiedGestures[1].name];
    if (current !== undefined) {
      return current["message"];
    }
  }
  return null;
}

function setText(text) {
  if (text) {
    document.querySelector(".detected").innerText = text;
  } else {
    document.querySelector(".detected").innerText = "";
  }
}

const knownGestures = [
  fp.Gestures.ThumbsUpGesture,
  // fp.Gestures.VictoryGesture,
  HelloLeft,
  Hello,
  HelloRight,
  IndexUp,
  WhatLeft,
  WhatRight,
  WeatherLeft,
  WeatherRight,
];
const GE = new fp.GestureEstimator(knownGestures);

const videoElement = document.getElementsByClassName("input_video")[0];
const canvasElement = document.getElementsByClassName("output_canvas")[0];
const controlsElement = document.getElementsByClassName("control-panel")[0];
const canvasCtx = canvasElement.getContext("2d");

const fpsControl = new FPS();

const spinner = document.querySelector(".loading");
spinner.ontransitionend = () => {
  spinner.style.display = "none";
};

async function onResults(results) {
  document.body.classList.add("loaded");
  fpsControl.tick();

  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(
    results.image,
    0,
    0,
    canvasElement.width,
    canvasElement.height
  );
  if (results.multiHandLandmarks && results.multiHandedness) {
    let leftHandMarks = null,
      rightHandMarks = null;
    if (results.multiHandedness[0].label === "Left") {
      leftHandMarks = results.multiHandLandmarks[0];
      if (results.multiHandedness[1]) {
        rightHandMarks = results.multiHandLandmarks[1];
      }
    } else {
      rightHandMarks = results.multiHandLandmarks[0];
      if (results.multiHandedness[1]) {
        leftHandMarks = results.multiHandLandmarks[1];
      }
    }

    let landmarks = [leftHandMarks, rightHandMarks];
    drawHands(landmarks, canvasCtx);
  }
  canvasCtx.restore();
}

function flattenLandmarks(landmarks) {
  if (landmarks === null) return null;
  landmarks_flattened = [];
  for (let i = 0; i < landmarks.length; i++) {
    let inner_array = [];
    inner_array.push(landmarks[i].x * WIDTH, landmarks[i].y * HEIGHT, -1);
    landmarks_flattened.push(inner_array);
  }
  return landmarks_flattened;
}

function identifyGesture(gesture) {
  if (!gesture) {
    return null;
  }
  if (gesture.gestures.length > 0) {
    if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
      const confidence = gesture.gestures.map(
        (prediction) => prediction.confidence
      );
      const maxConfidence = confidence.indexOf(
        Math.max.apply(null, confidence)
      );
      return gesture.gestures[maxConfidence];
    }
  }
  return null;
}

async function drawHands(landmarks, ctx) {
  landmarks_flattened = [
    flattenLandmarks(landmarks[0]),
    flattenLandmarks(landmarks[1]),
  ];

  drawLandmarksOnHands(landmarks_flattened, ctx);

  const leftHandGesture = landmarks_flattened[0]
      ? GE.estimate(landmarks_flattened[0], 6)
      : null,
    rightHandGesture = landmarks_flattened[1]
      ? GE.estimate(landmarks_flattened[1], 6)
      : null;

  let identifiedGestures = [
    identifyGesture(leftHandGesture),
    identifyGesture(rightHandGesture),
  ];

  if (identifiedGestures[0] && !identifiedGestures[1]) {
    setText(recognizeLeftHandGestures(identifiedGestures));
  } else if (!identifiedGestures[0] && identifiedGestures[1]) {
    setText(recognizeRightHandGestures(identifiedGestures));
  } else if (identifiedGestures[0] && identifiedGestures[1]) {
    setText(recognizeBothHandGestures(identifiedGestures));
  }
  
}

function drawLandmarks(landmarks, ctx, isLeftHand) {
  const style = isLeftHand ? left_hand_style : right_hand_style;

  for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
    let finger = Object.keys(fingerJoints)[j];
    for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
      const firstJointIndex = fingerJoints[finger][k];
      const secondJointIndex = fingerJoints[finger][k + 1];

      ctx.beginPath();
      ctx.moveTo(landmarks[firstJointIndex][0], landmarks[firstJointIndex][1]);
      ctx.lineTo(
        landmarks[secondJointIndex][0],
        landmarks[secondJointIndex][1]
      );
      ctx.strokeStyle = isLeftHand ? "#5327FF" : "#f44336";
      ctx.lineWidth = 5;
      ctx.stroke();
    }
  }

  for (let i = 0; i < landmarks.length; i++) {
    const x = landmarks[i][0];
    const y = landmarks[i][1];

    ctx.beginPath();
    ctx.arc(x, y, style[i]["size"], 0, 3 * Math.PI);

    ctx.fillStyle = style[i]["color"];
    ctx.fill();
  }
}

function drawLandmarksOnHands(landmarksArray, ctx) {
  if (landmarksArray[0]) {
    drawLandmarks(landmarksArray[0], ctx, true);
  }
  if (landmarksArray[1]) {
    drawLandmarks(landmarksArray[1], ctx, false);
  }
}

const hands = new Hands({
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.1/${file}`;
  },
});
hands.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({ image: videoElement });
  },
  width: WIDTH,
  height: HEIGHT,
});
camera.start();

new ControlPanel(controlsElement, {
  selfieMode: true,
  maxNumHands: 2,
  minDetectionConfidence: 0.8,
  minTrackingConfidence: 0.8,
})
  .add([fpsControl])
  .on((options) => {
    videoElement.classList.toggle("selfie", options.selfieMode);
    hands.setOptions(options);
  });
