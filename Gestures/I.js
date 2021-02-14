const I = new fp.GestureDescription('I'); 

// Index 
I.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 0.75)
I.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.9);

// Middle 
I.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 0.75)
I.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalDownLeft, 1.0);

// Ring 
I.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 0.75)
I.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalDownLeft, 1.0);

// Pinky 
I.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 0.75)
I.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalDownLeft, 1.0);

// Thumb 
I.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.75)
I.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);