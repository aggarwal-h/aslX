const You = new fp.GestureDescription('you');

// thumb:
You.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.5);
You.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 0.5);
You.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);
You.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);

// index:
You.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
You.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
// You.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0);
// You.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0);

// middle:
You.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
You.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
// You.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1.0);
// You.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1.0);

// ring:
You.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
You.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalDownLeft, 1.0);
You.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalDownRight, 1.0);

// pinky:
You.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
You.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalDownLeft, 1.0);
You.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalDownRight, 1.0);

// give additional weight to index and ring fp.Fingers
You.setWeight(fp.Finger.Index, 2);
You.setWeight(fp.Finger.Middle, 2);