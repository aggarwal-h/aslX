const thumbsDownGesture = new fp.GestureDescription("thumbs_down");
thumbsDownGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
thumbsDownGesture.addDirection(
  fp.Finger.Thumb,
  fp.FingerDirection.VerticalDown,
  1.0
);
thumbsDownGesture.addDirection(
  fp.Finger.Thumb,
  fp.FingerDirection.DiagonalDownLeft,
  0.5
);
thumbsDownGesture.addDirection(
  fp.Finger.Thumb,
  fp.FingerDirection.DiagonalDownRight,
  0.5
);
// do this for all other fingers
thumbsDownGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
thumbsDownGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
thumbsDownGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
thumbsDownGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);