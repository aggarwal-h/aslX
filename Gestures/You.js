const You = new fp.GestureDescription('You'); 

// Index 
//You.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 0.75)
//You.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalDownRight, 0.9);

// Middle 
You.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 0.75)
You.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalDownRight, 1.0);

// Ring 
You.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 0.75)
You.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalDownRight, 1.0);

// Pinky 
You.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 0.75)
You.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalDownRight, 1.0);

// Thumb 
You.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 0.75)
You.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);