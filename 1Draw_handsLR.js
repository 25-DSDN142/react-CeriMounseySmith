// ----=  HANDS  =----
// USING THE GESTURE DETECTORS (check their values in the debug menu)
// detectHandGesture(hand) returns "Pinch", "Peace", "Thumbs Up", "Pointing", "Open Palm", or "Fist"

/* load images here */
let myImage;

function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');
  myImage = loadImage('flowerone.png');
  myImagetwo = loadImage('plantone.png');
  myImagethree = loadImage('sun.png');
  myImagefour = loadImage('water.png');
}

function drawInteraction(faces, hands) {
  // hands part
  // for loop to capture if there is more than one hand on the screen. This applies the same process to all hands.
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    //console.log(hand);
    if (showKeypoints) {
      drawConnections(hand)
    }

    let middleFingerMcpX = hand.middle_finger_mcp.x;
    let middleFingerMcpY = hand.middle_finger_mcp.y;
    /*
    Start drawing on the hands here
    */

let whatGesture = detectHandGesture(hand)


if(hand.handedness === "Left"){
if(whatGesture == "Open Palm"){
image(myImage,middleFingerMcpX-100,middleFingerMcpY-75,200,200);
}

if(whatGesture == "Peace"){
  image(myImagetwo,middleFingerMcpX-100,middleFingerMcpY-75,200,200);
}

}


if(hand.handedness === "Right"){
if(whatGesture == "Open Palm"){
image(myImagethree,middleFingerMcpX-100,middleFingerMcpY-75,200,200);
}

if(whatGesture == "Peace"){
  image(myImagefour,middleFingerMcpX-50,middleFingerMcpY-100,100,200);
}

}

    //Stop drawing on the hands here
  
  }
  // You can make addtional elements here, but keep the hand drawing inside the for loop. 
  //------------------------------------------------------

}


function drawConnections(hand) {
  // Draw the skeletal connections
  push()
  for (let j = 0; j < connections.length; j++) {
    let pointAIndex = connections[j][0];
    let pointBIndex = connections[j][1];
    let pointA = hand.keypoints[pointAIndex];
    let pointB = hand.keypoints[pointBIndex];
    stroke(255, 0, 0);
    strokeWeight(2);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
  pop()
}

// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {
  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 10);
  }
  pop()

}