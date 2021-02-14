const IndexUp = new fp.GestureDescription("Done");
// IndexUp.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
// IndexUp.addDirection(
//   fp.Finger.Index,
//   fp.FingerDirection.VerticalUp,
//   1.0
// );
// do this for all other fingers
IndexUp.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
IndexUp.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
IndexUp.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
IndexUp.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
IndexUp.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

IndexUp.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 1.0);
IndexUp.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalDown, 1.0);
IndexUp.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalDown, 1.0);
IndexUp.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalDown, 1.0);