const WhatLeft = new fp.GestureDescription('WhatLeft'); 

// Index 
WhatLeft.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 0.75)
WhatLeft.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.9);

// Middle 
WhatLeft.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 0.75)
WhatLeft.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);

// Ring 
WhatLeft.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 0.75)
WhatLeft.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);

// Pinky 
WhatLeft.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 0.75)
WhatLeft.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);

// Thumb 
WhatLeft.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 0.75)
WhatLeft.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);

const WhatRight = new fp.GestureDescription('WhatRight'); 

// Index 
WhatRight.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 0.75)
WhatRight.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.9);

// Middle 
WhatRight.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 0.75)
WhatRight.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);

// Ring 
WhatRight.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 0.75)
WhatRight.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);

// Pinky 
WhatRight.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 0.75)
WhatRight.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);

// Thumb 
WhatRight.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 0.75)
WhatRight.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1.0);
