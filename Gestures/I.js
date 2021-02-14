const I = new fp.GestureDescription('I'); 

// Index 
I.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0)
I.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 1.0);

// Middle 
I.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0)
I.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalDown, 1.0);

// Ring 
I.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0)
I.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalDown, 1.0);

// Pinky 
I.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0)
I.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 1.0);
I.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1.0);

// Thumb 
I.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0)
I.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);
I.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);

I.setWeight(fp.Finger.Pinky, 5);