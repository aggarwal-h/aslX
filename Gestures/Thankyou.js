const Thankyou = new fp.GestureDescription('Thankyou'); 

// Index 
Thankyou.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 0.75)
Thankyou.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.9);

// Middle 
Thankyou.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 0.75)
Thankyou.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1.0);

// Ring 
Thankyou.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 0.75)
Thankyou.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 1.0);

// Pinky 
Thankyou.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 0.75)
Thankyou.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1.0);

// Thumb 
Thankyou.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 0.75)
Thankyou.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);