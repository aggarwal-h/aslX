const Hello = new fp.GestureDescription('Hello'); 

// Index 
Hello.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 0.75)
Hello.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);

// Middle 
Hello.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 0.75)
Hello.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);

// Ring 
Hello.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 0.75)
Hello.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);

// Pinky 
Hello.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 0.75)
Hello.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);

// Thumb 
Hello.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 0.75)
Hello.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
